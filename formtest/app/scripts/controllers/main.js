'use strict';

/**
 * @ngdoc function
 * @name formtestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formtestApp
 */
angular.module('formtestApp')
  .controller('MainCtrl', function () {

    this.schema = {
      'type': 'object',
      'properties': {
        'name': {
          'type': 'string'
        },
        'vegetarian': {
          'type': 'boolean'
        },
        'birthDate': {
          'type': 'string',
          'format': 'date'
        },
        'nationality': {
          'type': 'string',
          'enum': [
            'DE',
            'IT',
            'JP',
            'US',
            'RU',
            'Other'
          ]
        }
      }
    };

    this.uischema = {
      'type': 'Categorization',
      'elements': [
        {
          'type': 'Categorization',
          'label': 'Sub',
          'elements': [
            {
              'type': 'Category',
              'label': 'SubPrivate',
              'elements': [
                {
                  'type': 'Control',
                  'scope': {
                    '$ref': '#/properties/name'
                  }
                }
              ]
            },
            {
              'type': 'Category',
              'label': 'Additional',
              'elements': [
                {
                  'type': 'Control',
                  'scope': {
                    '$ref': '#/properties/nationality'
                  }
                },
                {
                  'type': 'Control',
                  'scope': {
                    '$ref': '#/properties/vegetarian'
                  }
                }
              ]
            }
          ]
        },
        {
          'type': 'Category',
          'label': 'Private',
          'elements': [
            {
              'type': 'Control',
              'scope': {
                '$ref': '#/properties/name'
              }
            },
            {
              'type': 'Control',
              'scope': {
                '$ref': '#/properties/birthDate'
              }
            }
          ]
        },
        {
          'type': 'Category',
          'label': 'Additional',
          'elements': [
            {
              'type': 'Control',
              'scope': {
                '$ref': '#/properties/birthDate'
              }
            },
            {
              'type': 'Control',
              'scope': {
                '$ref': '#/properties/vegetarian'
              }
            }
          ]
        }
      ]
    };
    this.getData = {
      'name': 'John Doe',
      'vegetarian': false,
      'birthDate': '1985-06-02',
      'nationality': 'DE'
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
