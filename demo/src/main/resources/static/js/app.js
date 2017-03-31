angular.module("demoApp", ['controllers', 'ngMaterial', 'ngMdIcons'])

.config(function() {

})

.run(function($rootScope) {
	$rootScope.created = 'CREATED';
	$rootScope.destroyed = 'DESTROYED';
});
