angular.module("demoApp", ['ui.router', 'app.controllers', 'app.routes', 'ngMaterial', 'ngMdIcons'])

.config(function() {

})

.run(function($rootScope) {
	$rootScope.created = 'CREATED';
	$rootScope.destroyed = 'DESTROYED';
});
