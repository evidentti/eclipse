angular.module("demoApp", ['tasks.controller', 'LocalStorageModule', 'jsonforms'])

.config(function(localStorageServiceProvider) {
//	https://github.com/grevory/angular-local-storage
	localStorageServiceProvider
	.setPrefix('demoAppStorage');
})

.run(function(localStorageService) {
	localStorageService.set('testingDemoAppStorage', '57199');
});
