angular.module('app.controller', [])

.controller('appController', function($scope) {
	console.log('appController', 'created', $scope.$parent);
	
	
	$scope.$on('$destroy', function() {
		console.log('appController', 'destroyed');
	});
});