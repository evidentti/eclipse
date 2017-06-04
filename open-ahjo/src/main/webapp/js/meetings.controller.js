/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('meeting.controller', [ 'app.constants' ]);

module.controller('meetingController', [ '$log', '$scope', 'APP_CONSTANTS', function(log, scope, C) {
	log.log('meetingController', C.CREATE);


	scope.$on('$destroy', function() {
		log.log('meetingController', C.DESTROY);
	});
} ]);