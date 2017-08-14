//angular.module("demoApp", ['task.service', 'tasks.controller', 'LocalStorageModule', 'jsonforms'])
angular.module("demoApp", ['task.service', 'tasks.controller', 'LocalStorageModule', 'jsonforms', 'jsonforms-bootstrap'])

.config(function(localStorageServiceProvider) {
//	https://github.com/grevory/angular-local-storage
	localStorageServiceProvider
	.setPrefix('demoAppStorage');
})

.run(function(localStorageService) {
	localStorageService.set('testingDemoAppStorage', '57199');
});
