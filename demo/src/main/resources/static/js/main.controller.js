angular.module('main.controller', [])

.controller('mainController', function($rootScope, $scope, $state, AppService) {
	console.log('mainController', $rootScope.created);
	
	var self = this;
	self.loading = false;
	self.objects = null;
	
	self.getIssues = function(refresh) {
		AppService.getIssues(refresh).then(function (response) {
			console.debug('READY', response);
			self.objects = angular.isArray(response) ? response : [];
        }, function (error) {
        	console.error('ERROR', error);
        }, function(notification) {
        	console.debug('NOTIFY', notification);
        	self.loading = true;
        }).finally(function () {
        	console.debug('FINALLY');
        	self.loading = false;
        });
	};
	
	self.getIssues();
	
	$scope.$on('$destroy', function() {
		console.log('mainController', $rootScope.destroyed);
	});
});