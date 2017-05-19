angular.module('frame.directive', [])
.directive('fDir', function() {
    return {
        scope: false,
        restrict: 'A',
        link: function(scope, element) {
        	console.log('fDir', scope, element);
        	
        	scope.$watch('id', function (newValue, oldValue, scope) {
        		if(newValue !== oldValue) {
        			var src = "https://dev.hel.fi:443/paatokset/v1/agenda_item/" + newValue
        			element.attr('src', src);
        		}
        	});
        }
    };
});