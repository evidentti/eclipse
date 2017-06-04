/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('app.service', [ 'api.service' ]);

module.service('AppService', [ '$log', 'MeetingResource', 'AgendaItemResource', 'localStorageService', '$q', '$timeout', function($log, MeetingResource, AgendaItemResource, localStorageService, $q, $timeout) {

	var self = this;
	var meta = null;
	var offset = 0;

	var names = [ 'Maija Liikkuvainen', 'Elli Elinkeino', 'Kalle Kaavoittaja', 'Olli Opettavainen' ];
	function randomName() {
		var i = Math.floor(Math.random() * names.length);
		return names[i];
	}

	var states = [ 'Valmistelussa', 'Päätöksenteossa', 'Päätetty' ];
	function randomState() {
		var i = Math.floor(Math.random() * states.length);
		return states[i];
	}

	var aliases = [ 'Kasvatus ja koulutus', 'Kaupunkiympäristö', 'Kulttuuri', 'Sosiaali', 'Kanslia' ];

	function randomActions() {
		var count = Math.floor(Math.random() * 10);
		var actions = [];
		for (var i = 0; i < count; i++) {
			var j = Math.floor(Math.random() * aliases.length);
			var action = {
				'alias' : aliases[j]
			}
			action.preparer = randomName();
			action.state = randomState();
			action.date = '3.5.2017';
			actions.push(action);
		}
		return actions;
	}

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
		var params = {
			'limit' : 50,
			'offset' : offset
		};
		if (angular.isObject(parameters)) {
			if (angular.isNumber(parameters.limit)) {
				params.limit = parameters.limit;
			}
			if (angular.isNumber(parameters.offset)) {
				params.offset = parameters.offset;
			}
		}
		var deferred = $q.defer();
		$timeout(function() {
			deferred.notify('started');
			AgendaItemResource.get(params).$promise.then(function(response) {
				meta = response.meta;
				offset = params.offset + params.limit;

				angular.forEach(response.objects, function(object) {
					object.actions = randomActions();
					object.date = object.issue.latest_decision_date;
					object.id = object.issue.register_id;
					object.decision_date = object.issue.latest_decision_date;

					var alias = [];
					angular.forEach(object.actions, function(action) {
						if (this.indexOf(action.alias) < 0) {
							this.push(action.alias);
						}
					}, alias)

					object.alias = alias;
				});

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