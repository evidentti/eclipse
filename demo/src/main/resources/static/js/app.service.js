angular.module('app.service', ['ngResource'])
.factory('IssueResource', ['$resource', function ($resource) {
	return $resource('https://dev.hel.fi:443/paatokset/v1/issue/', {}, {
		get: {
			method: 'GET',
			cache: false
		}
	});
}])
.service('AppService', ['IssueResource', '$q', '$timeout', function (IssueResource, $q, $timeout) {
	var self = this;
	self.objects = null;
	
	self.getIssues = function(refresh) {
		console.log('AppService.getIssues', refresh);
		var deferred = $q.defer();
        $timeout(function () {
        	if(refresh || !angular.isArray(self.objects)) {
        		deferred.notify('started');
                IssueResource.get({}).$promise.then(function (response) {
                	self.objects = response.objects;
        			deferred.resolve(angular.copy(self.objects));
                }, function (error) {
                    deferred.reject(error);
                });
        	}
        	else {
        		deferred.resolve(angular.copy(self.objects));
        	}
            
        }, 0);

        return deferred.promise;
	};
	
}]);
