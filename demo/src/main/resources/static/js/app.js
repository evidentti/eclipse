angular.module("demoApp", ['app.controller', 'frame.controller', 'frame.directive', 'ngMaterial', 'ngMdIcons', 'LocalStorageModule'])

.config(function(localStorageServiceProvider) {
//	https://github.com/grevory/angular-local-storage
	localStorageServiceProvider
	.setPrefix('mgmtDashboardApp');
})

.run(function(localStorageService) {
	localStorageService.set('testingLocalStorage', '57199');
});
