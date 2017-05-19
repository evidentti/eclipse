angular.module('frame.controller', [])

.controller('frameController', function($scope, $timeout) {
	console.log('frameController', 'created');
	
	$timeout(function() {
		$scope.id = '57199';
	}, 3000);
	
	$scope.$on('$destroy', function() {
		console.log('frameController', 'destroyed');
	});
});