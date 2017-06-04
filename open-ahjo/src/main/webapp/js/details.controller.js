/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('details.controller', [ 'app.service', 'app.constants' ]);

module.controller('detailsController', [ '$log', '$scope', '$rootScope', '$timeout', '$window', 'item', 'alias', 'meetings', 'APP_CONSTANTS', function(log, scope, rootScope, timeout, window, item, alias, meetings, C) {
	log.log('detailsController', 'construct', item, alias);
	log.log(meetings);

	if (!item) {
		rootScope.goState();
		return;
	}

	var self = this;

	self.appTitle = C.NAME;
	self.selectedHeader = null;
	self.item = item;
	self.selectedAlias = alias;
	self.alias = alias;

	self.headers = [
		{
			'title' : 'Aikajana'
		},
		{
			'title' : 'Asiakirjat'
		}
	];

	self.subheaders = [
		{
			'title' : 'Toimiala'
		},
		{
			'title' : 'Vastuuvalmistelija'
		},
		{
			'title' : 'Tila'
		},
		{
			'title' : 'Määräaika'
		}
	];

	self.links = [
		{
			'title' : 'Nimi'
		},
		{
			'title' : 'Tiedostotyyppi'
		}
	];

	self.selectedHeader = self.headers[0];

	// PUBLIC FUNCTIONS
	self.headerSelected = function(header) {
		log.log('detailsController', 'headerSelected', header);
		self.selectedHeader = header;
	};

	self.actionSelected = function(action) {
		log.log('detailsController', 'actionSelected', action);
	};

	self.attachmentSelected = function(attachment) {
		log.log('detailsController', 'attachmentSelected', attachment);
		if (angular.isObject(attachment) && angular.isString(attachment.file_uri)) {
			window.open(attachment.file_uri, '_blank');
		}
	};

	self.toggleFilter = function() {
		timeout(function() {
			self.selectedAlias = self.selectedAlias ? null : alias;
		}, rootScope.buttonDelay);
	};

	scope.$on('$destroy', function() {
		log.log('detailsController', 'destroy');
	});
} ]);