angular.module('app.service', ['ngResource'])
.factory('IssueResource', ['$resource', function ($resource) {
	return $resource('https://dev.hel.fi:443/paatokset/v1/issue/', {}, {
		get: {
			method: 'GET',
			cache: false
		}
	});
}])
.factory('CategoryResource', ['$resource', function ($resource) {
	return $resource('https://dev.hel.fi:443/paatokset/v1/category/', {}, {
		get: {
			method: 'GET',
			cache: false
		}
	});
}])
.service('AppService', ['CategoryResource', 'IssueResource', '$q', '$timeout', function (CategoryResource, IssueResource, $q, $timeout) {
	var self = this;
	
	self.categories = null;
	self.issues = null;
	
	self.getCategories = function(refresh) {
		console.log('AppService.getCategories');
		var deferred = $q.defer();
        $timeout(function () {
        	deferred.notify('started');
        	if(refresh || !angular.isArray(self.categories)) {
        		CategoryResource.get({}).$promise.then(function (response) {
        			self.categories = response.objects;
        			deferred.resolve(angular.copy(self.categories));
            	}, function (error) {
            		deferred.reject(error);
            	});
        	}
        	else {
        		deferred.resolve(angular.copy(self.categories));
        	}       
        }, 0);

        return deferred.promise;
	};
	
	self.getIssues = function(refresh) {
		console.log('AppService.getIssues', refresh);
		var deferred = $q.defer();
        $timeout(function () {
        	if(refresh || !angular.isArray(self.issues)) {
        		deferred.notify('started');
                IssueResource.get({}).$promise.then(function (response) {
                	self.issues = response.objects;
        			deferred.resolve(angular.copy(self.issues));
                }, function (error) {
                    deferred.reject(error);
                });
        	}
        	else {
        		deferred.resolve(angular.copy(self.issues));
        	}
        }, 0);

        return deferred.promise;
	};
	
}]);
