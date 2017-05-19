angular.module('frame.directive', [])
.directive('fDir', function(localStorageService) {
    return {
        scope: {
        	'baseUrl': '='
        },
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/frame.directive.html',
        link: function(scope, element) {
        	
        	var id = localStorageService.get('testingLocalStorage');	
        	var src = scope.baseUrl + '/' + id;
        	element.attr('src', src);
  
        }
    };
});