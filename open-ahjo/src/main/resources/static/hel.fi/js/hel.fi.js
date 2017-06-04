/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

var module = angular.module('hel.service', []);

module.service('HelService', [ '$window', function($window) {

	var self = this;

	// PUBLIC FUNCTIONS
	self.systemOS = function() {
		var userAgent = $window.navigator.userAgent;

		// Windows Phone must come first because its UA also contains "Android"
		if (/windows phone/i.test(userAgent)) {
			return "Windows Phone";
		}

		if (/android/i.test(userAgent)) {
			return "Android";
		}

		// iOS detection from: http://stackoverflow.com/a/9039885/177710
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			return "iOS";
		}

		return 'tuntematon';
	};

	self.browser = function() {
		var userAgent = $window.navigator.userAgent;
		var browsers = {
			chrome : /chrome/i,
			safari : /safari/i,
			firefox : /firefox/i,
			ie : /internet explorer/i
		};

		for (var key in browsers) {
			if (browsers[key].test(userAgent)) {
				return key;
			}
		}
		;

		return 'tuntematon';
	};

	self.userAgent = function() {
		return $window.navigator.userAgent;
	};

} ]);

module.config(function($mdThemingProvider) {

//	$mdThemingProvider.definePalette('hkiPalette', {
//		'50' : 'ffebee',
//		'100' : 'ffcdd2',
//		'200' : 'ef9a9a',
//		'300' : 'e57373',
//		'400' : 'ef5350',
//		'500' : 'f44336',
//		'600' : 'e53935',
//		'700' : 'd32f2f',
//		'800' : 'c62828',
//		'900' : 'b71c1c',
//		'A100' : 'ff8a80',
//		'A200' : 'ff5252',
//		'A400' : 'ff1744',
//		'A700' : 'd50000',
//		'contrastDefaultColor' : 'light', // whether, by default, text (contrast)
//		// on this palette should be dark or light
//
//		'contrastDarkColors' : [ '50', '100', //hues which contrast should be 'dark' by default
//			'200', '300', '400', 'A100' ],
//		'contrastLightColors' : undefined // could also specify this if default was 'dark'
//	});
//
//	$mdThemingProvider.theme('default')
//		.primaryPalette('hkiPalette')

});