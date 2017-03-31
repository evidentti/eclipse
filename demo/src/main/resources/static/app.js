angular.module("demoApp", ['controllers', 'ngMaterial', 'ngMdIcons'])

.config(function() {

})

.run(function($rootScope) {
	$rootScope.test = 'RUN';
});
