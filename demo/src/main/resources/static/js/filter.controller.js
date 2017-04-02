angular.module('filter.controller', [])

.controller('filterController', function($rootScope, $scope, $state) {
	console.log('filterController', $rootScope.created);

	
	$scope.$on('$destroy', function() {
		console.log('filterController', $rootScope.destroyed);
	});
});