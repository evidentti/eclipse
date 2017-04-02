angular.module('main.controller', [])

.controller('mainController', function($rootScope, $scope, $state, AppService) {
	console.log('mainController', $rootScope.created);
	
	var self = this;
	
	self.loadingCategories = false;
	self.loadingIssues = false;
	self.categories = null;
	self.issues = null;
	self.issuesMeta = null;
	
	self.selectedCategory = null;
	self.footerText = null;
	self.limit = 50;
	
	function createFilterFor(category) {
		return function filterFn(field) {
			return (angular.lowercase(field.name).indexOf(angular.lowercase(category)) === 0);
		};
	}
	
	self.getCategories = function(params) {
		AppService.getCategories(params).then(function (response) {
			console.debug('mainController.getCategories', response);
			self.categories = angular.isArray(response.objects) ? response.objects : [];
        }, function (error) {
        	console.error('mainController.getCategories', error);
        }, function(notification) {
        	console.debug('mainController.getCategories: notify', notification);
        	self.loadingCategories = true;
        }).finally(function () {
        	console.debug('mainController.getCategories: finally');
        	self.loadingCategories = false;
        });
	};
	
	self.getIssues = function(params) {
		if(angular.isObject(params)) {
			params.limit = self.limit;
		}
		else {
			params = {'limit': self.limit};
		}
		AppService.getIssues(params).then(function (response) {
			console.debug('mainController.getIssues', response);
			var issues = angular.isArray(response.objects) ? response.objects : [];
			if(!angular.isArray(self.issues)) {
				console.debug('ARRAY CREATED');
				self.issues = [];
			}
			angular.forEach(issues, function(issue) {
			  this.push(issue);
			}, self.issues);
			
			self.issuesMeta = angular.isObject(response.meta) ? response.meta : null;
        }, function (error) {
        	console.error('mainController.getIssues', error);
        }, function(notification) {
        	console.debug('mainController.getIssues: notify', notification);
        	self.loadingIssues = true;
        }).finally(function () {
        	console.debug('mainController.getIssues: finally');
        	self.loadingIssues = false;
        	if(angular.isArray(self.issues)) {
        		if(self.issues.length) {
        			self.footerText = 'Haettu: ' + self.issues.length;
        			if(angular.isObject(self.issuesMeta)) {
        				self.footerText = self.footerText + ', Kokonaismäärä: ' + self.issuesMeta.total_count;
                	}
        		}
        		else {
        			self.footerText = 'Ei hakutuloksia';
        		}
        	}
        });
	};
	
	self.openIssue = function(issue) {
		console.log('mainController.openIssue', issue);
		if(angular.isObject(issue)) {

		}
	};
	
	self.getIssuesByCategory = function(category) {
		console.log('mainController.getIssuesByCategory', category);
		if(angular.isObject(category)) {
			self.issues = null;
//			self.getIssues({'category': category.id, 'order_by': '-last_modified_time'});
			self.getIssues({'category': category.id, 'limit': self.limit});
		}
	};
	
	self.getNextIssues = function(category, meta) {
		console.log('mainController.getNextIssues', arguments);
		var params = {'offset': 0};
		if(angular.isArray(self.issues)) {
			params.offset = self.issues.length;
		}
		self.getIssues(params);
	};
	
	self.querySearch = function(query) {
		return query ? self.categories.filter( createFilterFor(query) ) : self.categories;
	};
	
	self.getCategories();
	
	$scope.$on('$destroy', function() {
		console.log('mainController', $rootScope.destroyed);
	});
});