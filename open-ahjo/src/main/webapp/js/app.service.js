/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('app.service', [ 'api.service' ]);

module.service('AppService', [ '$log', 'MeetingResource', 'AgendaItemResource', 'localStorageService', '$q', '$timeout', function($log, MeetingResource, AgendaItemResource, localStorageService, $q, $timeout) {

	var self = this;

	// PUBLIC FUNCTIONS
	self.getMeetings = function() {
		var deferred = $q.defer();
		$timeout(function() {
			deferred.notify('started');
			MeetingResource.get().$promise.then(function(response) {
				deferred.resolve(response.objects);
			}, function(error) {
				deferred.reject(error);
			});
		}, 0);
		
		return deferred.promise;
	};

	self.getAgendaItems = function(parameters) {
		$log.log('AppService.getAgendaItems', parameters);
		var deferred = $q.defer();
		$timeout(function() {
			deferred.notify('started');
			AgendaItemResource.get().$promise.then(function(response) {
				deferred.resolve(response);
			}, function(error) {
				deferred.reject(error);
			});
		}, 0);

		return deferred.promise;
	};

	self.setToStorage = function(key, value) {
		return localStorageService.set(key, value);
	};

	self.getFromStorage = function(key) {
		return localStorageService.get(key);
	};

} ]);