angular.module('app.controllers', [])

.controller('appController', function($rootScope, $scope) {
	console.log('appController', $rootScope.created);
	
	var self = this;
	self.currentNavItem = 'page1';
	
	$scope.$on('$destroy', function() {
		console.log('appController', $rootScope.destroyed);
	});
});