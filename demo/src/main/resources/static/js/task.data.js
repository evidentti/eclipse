angular.module('task.service', [])
.service('TaskService', ['localStorageService', '$http', '$q', '$timeout', function(localStorageService, $http, $q, $timeout) {
	
	this.get = function() {
		var id = localStorageService.get('testingDemoAppStorage');
		var url = 'https://dev.hel.fi:443/paatokset/v1/agenda_item/' + id;
		
		var data = {
		        "name": "Send email to Adriana",
		        "description": "Confirm if you have passed the subject",
		        "done": true
		};
		
		var deferred = $q.defer();
		
		$timeout(function() {
			deferred.notify('started');
			$http.get(url).then(function(response) {
	    		data.name = response.data.introducer;
	    		data.description = response.data.subject;
	    		deferred.resolve(data);
	    	}, function(error) {
	    		deferred.reject(error);
	    	});
		}, 0);
		
		return deferred.promise;
	}
}]);