angular.module('main.controller', [])

.controller('mainController', function($rootScope, $scope, $state, AppService) {
	console.log('mainController', $rootScope.created);
	
	var self = this;
	
	self.loadingCategories = false;
	self.loadingIssues = false;
	self.categories = null;
	self.issues = null;
	
	self.selectedCategory = null;
	
	function createFilterFor(category) {
		return function filterFn(field) {
			return (angular.lowercase(field.name).indexOf(angular.lowercase(category)) === 0);
		};
	}
	
	self.getCategories = function(refresh) {
		AppService.getCategories(refresh).then(function (response) {
			console.debug('mainController.getCategories', response);
			self.categories = angular.isArray(response) ? response : [];
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
	
	self.getIssues = function(refresh) {
		AppService.getIssues(refresh).then(function (response) {
			console.debug('mainController.getIssues', response);
			self.issues = angular.isArray(response) ? response : [];
        }, function (error) {
        	console.error('mainController.getIssues', error);
        }, function(notification) {
        	console.debug('mainController.getIssues: notify', notification);
        	self.loadingIssues = true;
        }).finally(function () {
        	console.debug('mainController.getIssues: finally');
        	self.loadingIssues = false;
        });
	};
	
	self.openIssue = function(issue) {
		console.log('mainController.openIssue', issue);
	};
	
	self.selectedCategoryChange = function(category) {
		console.log('mainController.selectedCategoryChange', category);
	};
	
	self.querySearch = function(query) {
		return query ? self.categories.filter( createFilterFor(query) ) : self.categories;
	};
	
	self.getCategories(true);
	
	$scope.$on('$destroy', function() {
		console.log('mainController', $rootScope.destroyed);
	});
});