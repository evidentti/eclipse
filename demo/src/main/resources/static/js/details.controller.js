angular.module('details.controller', [])

.controller('detailsController', function($rootScope, $scope, $state) {
	console.log('detailsController', $rootScope.created);

	
	$scope.$on('$destroy', function() {
		console.log('detailsController', $rootScope.destroyed);
	});
});