angular.module('demoApp')
.service('TaskService', ['localStorageService', '$http', '$q', function(localStorageService, $http, $q) {
	
	this.get = function() {
		var id = localStorageService.get('testingDemoAppStorage');
		var url = 'https://dev.hel.fi:443/paatokset/v1/agenda_item/' + id;
		
		var data = {
		        "name": "Send email to Adriana",
		        "description": "Confirm if you have passed the subject",
		        "done": true
		};
		
		var deferred = $q.defer();
		
		$http.get(url).then(function(response) {
    		data.name = response.data.introducer;
    		data.description = response.data.subject;
    		deferred.resolve(data);
    	}, function(error) {
    		deferred.reject(error);
    	});
		
		return deferred.promise;
	}
}])
.value("Task",
    {
        "name": "Send email to Adriana",
        "description": "Confirm if you have passed the subject",
        "done": true
    }
);