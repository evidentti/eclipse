/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('app.controller', [ 'app.constants']);

module.controller('appController', [ '$log', '$scope', 'APP_CONSTANTS', function(log, scope, C) {
	log.log('appController', C.CREATE);

	var self = this;
	self.appTitle = C.NAME;

	scope.$on('$destroy', function() {
		log.log('appController', C.DESTROY);
	});
} ]);