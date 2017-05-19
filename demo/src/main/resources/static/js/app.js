angular.module("demoApp", ['app.controller', 'frame.controller', 'tasks.controller', 'frame.directive', 
	'ngMaterial', 'ngMdIcons', 'LocalStorageModule', 'jsonforms'])

.config(function(localStorageServiceProvider) {
//	https://github.com/grevory/angular-local-storage
	localStorageServiceProvider
	.setPrefix('demoAppStorage');
})

.run(function(localStorageService) {
	localStorageService.set('testingDemoAppStorage', '57199');
});
