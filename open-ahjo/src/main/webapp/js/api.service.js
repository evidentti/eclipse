/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('api.service', [ 'ngResource', 'api.constants' ]);

module.factory('MeetingResource', [ '$resource', function($resource) {
	return $resource('https://dev.hel.fi:443/paatokset/v1/meeting/', {}, {
		get : {
			method : 'GET',
			cache : false
		}
	});
} ]);

module.factory('AgendaItemResource', [ '$resource', function($resource) {
	return $resource('https://dev.hel.fi:443/paatokset/v1/agenda_item/', {}, {
		get : {
			method : 'GET',
			cache : false
		}
	});
} ]);