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
.factory('NextResource', ['$resource', function ($resource) {
	return $resource('https://dev.hel.fi:443/:next', {':next': '@next'}, {
		get: {
			method: 'GET',
//			url: 'https://dev.hel.fi:443/:next',
			cache: false
		}
	});
}])
.service('AppService', ['CategoryResource','IssueResource','NextResource','$q','$timeout', function (CategoryResource,IssueResource,NextResource,$q,$timeout) {
	
	this.getCategories = function(params) {
		console.log('AppService.getCategories', arguments);
		var deferred = $q.defer();
        $timeout(function () {
        	deferred.notify('started');
        	CategoryResource.get(params).$promise.then(function (response) {
        		deferred.resolve(response);
            }, function (error) {
            	deferred.reject(error);
            });     
        }, 0);

        return deferred.promise;
	};
	
	this.getIssues = function(params) {
		console.log('AppService.getIssues', arguments);
		var deferred = $q.defer();
        $timeout(function () {
        	deferred.notify('started');
        	IssueResource.get(params).$promise.then(function (response) {
        		deferred.resolve(response);
        	}, function (error) {
        		deferred.reject(error);
        	});
        }, 0);

        return deferred.promise;
	};
	
	this.getNext = function(params) {
		console.log('AppService.getNext', params);
		var deferred = $q.defer();
        $timeout(function () {
        	deferred.notify('started');
        	NextResource.get(params).$promise.then(function (response) {
        		deferred.resolve(response);
        	}, function (error) {
        		deferred.reject(error);
        	});
        }, 0);

        return deferred.promise;
	};
	
}]);
