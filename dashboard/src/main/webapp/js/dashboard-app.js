
angular.module("dashboardApp",['controllers']).config(function(){}).run(function($rootScope){$rootScope.test='RUN';});var controllers=angular.module('controllers',[]).controller('appController',function($rootScope){console.log('appController',$rootScope.test);});