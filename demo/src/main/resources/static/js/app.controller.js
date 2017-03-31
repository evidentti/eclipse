angular.module('app.controllers', ['main.controller'])

.controller('appController', function($rootScope, $scope) {
	console.log('appController', $rootScope.created);
	
	$scope.$on('$destroy', function() {
		console.log('appController', $rootScope.destroyed);
	});
});