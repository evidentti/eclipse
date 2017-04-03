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
		console.log('AppService.issueParams', iParams);
		if(!angular.isObject(iParams)) {
			iParams = {'category': null, 'limit': 50, 'offset': 50};
		}
		console.debug('AppService.issueParams', iParams);
		return iParams;
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
	
	self.getIssues = function(value) {
		console.log('AppService.getIssues', value);
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
	
	this.getNext = function() {
		console.log('AppService.getNext', self.issueResponse);
		var deferred = $q.defer();
        $timeout(function () {
        	deferred.notify('started');
        	var params = issueParams();
        	console.debug('AppService.getNext', params);
        	IssueResource.get(params).$promise.then(function (response) {
        		self.issueResponse = response;
        		deferred.resolve(angular.copy(response));
        	}, function (error) {
        		deferred.reject(error);
        	});
        }, 0);

        return deferred.promise;
	};
	
}]);
