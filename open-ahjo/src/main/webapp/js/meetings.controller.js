/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('meetings.controller', [ 'app.constants', 'app.service' ]);

module.controller('meetingsController', [ '$log', '$scope', 'APP_CONSTANTS', 'AppService', function(log, scope, C, AppService) {
	log.log('meetingsController', C.CREATE);

	var self = this;
	self.meetings;

	AppService.getMeetings().then(function(meetings) {
		log.log('meetingsController', 'getMeetings', meetings)
		self.meetings = meetings;
	}, function(error) {
		log.error('meetingsController', 'getMeetings', error);
	}, function(notification) {
		log.info('meetingsController', 'getMeetings', notification);
	}).finally(function() {
		log.info('meetingsController', 'getMeetings', 'finally');
	});

	self.itemSelected = function(item) {
		log.log('meetingsController', 'itemSelected', item);
	};

	scope.$on('$destroy', function() {
		log.log('meetingsController', C.DESTROY);
	});
} ]);