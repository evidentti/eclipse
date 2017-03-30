var controllers = angular.module('controllers', [])

.controller('appController', function($rootScope) {
	console.log('appController', $rootScope.test);
});