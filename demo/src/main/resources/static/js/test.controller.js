angular.module('test.controller', [])

.controller('testController', function($rootScope, $scope) {
	console.log('testController', $rootScope.created);
	
	$scope.$on('$destroy', function() {
		console.log('testController', $rootScope.destroyed);
	});
});