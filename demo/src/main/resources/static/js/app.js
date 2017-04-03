angular.module("demoApp", ['ui.router', 'app.service', 'app.controllers', 'app.routes', 'ngMaterial', 'ngMdIcons'])

.config(function() {

})

.run(function($rootScope, $state) {
	
	$rootScope.created = 'CREATED';
	$rootScope.destroyed = 'DESTROYED';
	$rootScope.appName = 'DEMO APP';
	$rootScope.menuOpen = true;
	
	$rootScope.goState = function(st) {
		console.log('goState', st);
		if(angular.isString(st)) {
			$state.go(st);
		}
		else {
			$state.go('main');
		}
	};
	
	$rootScope.toggleMenu = function() {
		$rootScope.menuOpen = $rootScope.menuOpen ? false : true;
	};
	
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
        console.log('app.stateChangeStart:', toState);
    });
	
	$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
        console.log('app.stateNotFound:', unfoundState);
    });
	
	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        console.log('app.stateChangeSuccess:', toState);
    });
	
	$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.error('app.stateChangeError:', toState, error);
    });
	
//	$rootScope.$on('$viewContentLoading', function(event, viewConfig){ 
//		console.log('app.viewContentLoading:', viewConfig);
//	});
//	
//	$rootScope.$on('$viewContentLoaded', function(event, viewConfig){ 
//		console.log('app.viewContentLoaded:', viewConfig);
//	});
});
