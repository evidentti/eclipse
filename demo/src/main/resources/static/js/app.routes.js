angular.module('app.routes', [])

.config(['$stateProvider', function($stateProvider) {
	
	$stateProvider
    .state("main", {
        url: '',
        views: {
            'appView': {
                templateUrl: 'views/main.html',
                controller: 'mainController',
                controllerAs: 'ctrl'
            }
        }
    });

}]);