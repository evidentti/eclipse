'use strict';

/**
 * @ngdoc overview
 * @name formtestApp
 * @description
 * # formtestApp
 *
 * Main module of the application.
 */
angular
  .module('formtestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMdIcons',
    'jsonforms'
    // 'jsonforms',
    // 'jsonforms-bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
