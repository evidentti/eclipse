/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('home.controller', [ 'app.constants' ]);

module.controller('homeController', [ '$log', '$scope', 'APP_CONSTANTS', '$state', function(log, scope, C, state) {
	log.log('homeController', C.CREATE);

	var self = this;
	self.appTitle = C.NAME;
	self.currentNavItem = 'home';

	//	PUBLIC FUNCTIONS
	self.navItemClicked = function(item) {
		log.log('homeController', 'navItemClicked', item);
		self.currentNavItem = item;
		state.go(item);
	};

	//	LISTENERS
	scope.$on('$destroy', function() {
		log.log('homeController', C.DESTROY);
	});
} ]);