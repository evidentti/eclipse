angular.module("demoApp", ['app.controllers', 'ngMaterial', 'ngMdIcons'])

.config(function() {

})

.run(function($rootScope) {
	
	$rootScope.created = 'CREATED';
	$rootScope.destroyed = 'DESTROYED';
});
