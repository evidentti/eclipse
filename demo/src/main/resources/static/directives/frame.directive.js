angular.module('frame.directive', [])
.directive('fDir', function(localStorageService, $http) {
    return {
        scope: {
        	'baseUrl': '='
        },
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/frame.directive.html',
        link: function(scope, element) {
        	
        	var id = localStorageService.get('testingLocalStorage');	
        	var url = scope.baseUrl + '/' + id;
        	
        	$http.get(url).then(function(response) {
        		scope.data = response.data;
        	}, function(error) {
        		console.error(error);
        	});
  
        }
    };
});