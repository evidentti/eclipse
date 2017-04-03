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
	self.issueResponse = null;
	var iParams = null;
	
	function issueParams() {
		if(!angular.isObject(self.issueParams)) {
			self.issueParams = {'category': null, 'limit': 50};
		}
		return self.issueParams;
	}
	
	self.setIssueParams = function(params) {
		if(angular.isObject(params)) {
			iParams = params;
		}
	};
	
	self.getIssueParams = function() {
		var params = issueParams();
		return angular.copy(params);
	};
	
	self.setLimit = function(limit) {
		var params = issueParams();
		params.limit = limit ? limit : 20;
		iParams = params;
	};
	
	self.setCategory = function(category) {
		console.log('AppService.getCategories', arguments);
		var params = issueParams();
		params.category = category ? category : null;
		iParams = params;
	};
	
	self.getCategories = function(params) {
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
	
	self.getIssues = function() {
		console.log('AppService.getIssues');
		var deferred = $q.defer();
        $timeout(function () {
        	deferred.notify('started');
        	IssueResource.get(issueParams()).$promise.then(function (response) {
        		self.issueResponse = response;
        		deferred.resolve(angular.copy(response));
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
        	$timeout(function () {
        		deferred.resolve({});
            }, 1000);
        }, 0);

        return deferred.promise;
	};
	
}]);
