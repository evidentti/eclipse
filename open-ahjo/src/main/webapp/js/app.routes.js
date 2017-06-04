/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

angular.module('app.routes', [ 'api.service' ]);

module.config([ '$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider) {

	stateProvider
		.state("home", {
			url : '',
			templateUrl : 'views/app.html',
			controller : 'appController',
			controllerAs : 'c'
		})
		.state("home.meetings", {
			url : '/meetings',
			templateUrl : 'views/meetings.html',
			controller : 'meetingsController',
			controllerAs : 'c'
		})
		.state("main", {
			url : '/main',
			templateUrl : 'views/main.html',
			controller : 'mainController',
			controllerAs : 'c'
		})
		.state("main.details", {
			url : '/details',
			templateUrl : 'views/details.html',
			controller : 'detailsController',
			controllerAs : 'c',
			params : {
				selectedItem : null,
				selectedAlias : null
			},
			resolve : {
				MeetingResource : 'MeetingResource',
				item : function($stateParams) {
					return $stateParams.selectedItem;
				},
				alias : function($stateParams) {
					return $stateParams.selectedAlias;
				},
				meetings : function(MeetingResource) {
					return MeetingResource.get();
				}
			}
		});

	urlRouterProvider.otherwise('home');
} ]);


module.run([ '$log', '$state', '$rootScope', '$timeout', function(log, state, rootScope, timeout) {
	log.log('app.routes', 'RUN');

	rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
		log.log('stateChangeStart:', toState);
	});

	rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
		log.log('stateNotFound:', unfoundState);
	});

	rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		log.log('stateChangeSuccess:', toState);
		rootScope.state = toState.name;
	});

	rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
		log.error('stateChangeError:', toState, error);
	});

	rootScope.goState = function(st, params) {
		// spare some time for UI animations (buttons ect.)
		timeout(function() {
			if (angular.isString(st)) {
				state.go(st, params);
			} else {
				state.go('main');
			}
		}, rootScope.buttonDelay);
	};
} ]);