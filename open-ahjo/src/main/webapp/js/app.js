/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var vendors = angular.module('app.vendors', [ 'ui.router', 'ui.router.state.events', 'ngMaterial', 'ngMdIcons', 'ngMessages', 'angular.filter', 'LocalStorageModule' ]);
var controllers = angular.module('app.controllers', [ 'app.controller', 'main.controller', 'details.controller' ]);

var module = angular.module("openAhjoApp", [ 'app.vendors', 'app.controllers', 'app.routes', 'hel.service', 'item.filter' ]);

module.config([ 'localStorageServiceProvider', '$logProvider', function(localStorageServiceProvider, logProvider) {
	//	https://github.com/grevory/angular-local-storage
	localStorageServiceProvider
		.setPrefix('openAhjoApp');

	// this is only for $log.debug()
	logProvider.debugEnabled(true);
} ]);

module.run([ '$log', '$rootScope', '$mdToast', 'HelService', 'APP_CONSTANTS', function(log, rootScope, mdToast, HS, C) {
	log.log('openAhjoApp', 'RUN');

	rootScope.appTitle = C.NAME;
	rootScope.OS = HS.systemOS();
	rootScope.browser = HS.browser();
	rootScope.userAgent = HS.userAgent();
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