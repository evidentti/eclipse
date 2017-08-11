angular.module('task.service', ['ngResource'])
.factory('TaskServiceSubmit', ['$resource', function (resource) {
    return resource("localhost/service", null, {
        update: {
            method: 'POST'
        }
    });
}])
.service('TaskService', ['localStorageService', '$http', '$q', '$timeout', function(localStorageService, $http, $q, $timeout) {
	
	this.get = function() {
		
		var deferred = $q.defer();
		
		$timeout(function() {
			deferred.notify('get started');
			
			$http.get('response.json').then(function(response) {
				deferred.resolve(response.data);
            });
		}, 3000);
		
		return deferred.promise;
	}

}]);