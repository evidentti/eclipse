angular.module('app.routes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
    .state("main", {
        url: '/main',
        views: {
            'appView': {
                templateUrl: 'views/main.html',
                controller: 'mainController',
                controllerAs: 'ctrl'
            },
            'bodyView': {
                templateUrl: 'views/main.html',
                controller: 'mainController',
                controllerAs: 'ctrl'
            }
        }
    })
    .state("details", {
        url: '/details',
        views: {
            'appView': {
                templateUrl: 'views/details.html',
                controller: 'detailsController',
                controllerAs: 'ctrl'
            }
        }
    });
	
	$urlRouterProvider.otherwise('/main');
	
}]);