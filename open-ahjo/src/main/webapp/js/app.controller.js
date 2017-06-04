/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('app.controller', [ 'app.constants' ]);

module.controller('appController', [ '$log', '$scope', 'APP_CONSTANTS', '$state', function(log, scope, C, state) {
	log.log('appController', C.CREATE, scope);

	var self = this;
	self.appTitle = C.NAME;
	self.currentNavItem = 'home';

	//	PUBLIC FUNCTIONS
	self.navItemClicked = function(item) {
		log.log('appController', 'navItemClicked', item);
		self.currentNavItem = item;
		state.go(item);
	};

	//	LISTENERS
	scope.$on('$destroy', function() {
		log.log('appController', C.DESTROY);
	});
} ]);