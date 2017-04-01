angular.module('main.controller', [])

.controller('mainController', function($rootScope, $scope, $state, AppService) {
	console.log('mainController', $rootScope.created);
	
	var self = this;
	
	self.act = function(id) { // 33521
		AppService.get({'register_id': id}).$promise.then(function (response) {
			console.debug('AppService.get', response);
        }, function (error) {
            console.error('AppService.get', error);
        });
	};
	
	$scope.$on('$destroy', function() {
		console.log('mainController', $rootScope.destroyed);
	});
});