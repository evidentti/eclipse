/**
* (c) 2017 Tieto Finland Oy
* Licensed under the MIT license.
*/

'use strict';

angular.module('hel.service', [])
.service('HelService', ['$window', function ($window) {
	
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
		var browsers = {chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i};

        for(var key in browsers) {
        	if (browsers[key].test(userAgent)) {
        		return key;
        	}
        };

        return 'tuntematon';
	};
	
	self.userAgent = function() {
        return $window.navigator.userAgent;
	};

}]);