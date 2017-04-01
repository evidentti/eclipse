angular.module('app.service', ['ngResource'])
.factory('AppService', ['$resource', function ($resource) {
	return $resource('https://dev.hel.fi:443/paatokset/v1/issue/', {}, {
		get: {
			method: 'GET',
			cache: false
		}
	});
}]);
