angular.module('main.controller', [])

.controller('mainController', function($rootScope, $scope, $state) {
	console.log('mainController', $rootScope.created);
	
	var self = this;
	
	$scope.$on('$destroy', function() {
		console.log('mainController', $rootScope.destroyed);
	});
});