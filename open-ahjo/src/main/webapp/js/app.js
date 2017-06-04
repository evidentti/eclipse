/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

angular.module("openAhjoApp", [ 'ui.router', 'ui.router.state.events', 'app.controllers', 'app.routes', 'ngMaterial', 'ngMdIcons', 'ngMessages', 'angular.filter', 'hel.service', 'LocalStorageModule', 'item.filter' ])
	.config([ 'localStorageServiceProvider', '$logProvider', function(localStorageServiceProvider, logProvider) {
		//	https://github.com/grevory/angular-local-storage
		localStorageServiceProvider
			.setPrefix('openAhjoApp');

		// this is only for $log.debug()
		logProvider.debugEnabled(true);
	} ])
	.run([ '$log', '$rootScope', '$mdToast', 'HelService', 'localStorageService', function(log, rootScope, mdToast, HelService, localStorageService) {
		log.log('openAhjoApp', 'RUN');

		rootScope.appTitle = 'Open Ahjo';
		rootScope.OS = HelService.systemOS();
		rootScope.browser = HelService.browser();
		rootScope.userAgent = HelService.userAgent();
		rootScope.state = null;
		rootScope.buttonDelay = 300;

		rootScope.showInfo = function(text, delay, position) {
			delay = angular.isNumber(delay) ? delay : 3000;
			position = angular.isString(position) ? position : 'top right';
			mdToast.show(
				mdToast.simple()
					.textContent(text)
					.position(position)
					.hideDelay(delay)
			);
		};
	} ]);