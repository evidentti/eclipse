/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('meetings.controller', [ 'app.constants' ]);

module.controller('meetingsController', [ '$log', '$scope', 'APP_CONSTANTS', function(log, scope, C) {
	log.log('meetingsController', C.CREATE);


	scope.$on('$destroy', function() {
		log.log('meetingsController', C.DESTROY);
	});
} ]);