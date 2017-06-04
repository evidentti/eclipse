/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('api.service', [ 'ngResource', 'api.constants' ]);

module.factory('MeetingResource', [ '$resource', 'API', function($resource, API) {
	return $resource(API.MEETING, {}, {
		get : {
			method : 'GET',
			cache : false
		}
	});
} ]);

module.factory('AgendaItemResource', [ '$resource', 'API', function($resource, API) {
	return $resource(API.AGENDA_ITEM, {}, {
		get : {
			method : 'GET',
			cache : false
		}
	});
} ]);