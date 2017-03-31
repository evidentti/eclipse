angular.module('main.controller', [])

.controller('mainController', function($rootScope, $scope) {
	console.log('mainController', $rootScope.created);
	
	$scope.$on('$destroy', function() {
		console.log('mainController', $rootScope.destroyed);
	});
});