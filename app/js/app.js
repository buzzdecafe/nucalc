'use strict';


// Declare app level module which depends on filters, and services
var nucalc = angular.module('nucalc', []);

nucalc.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pulses', {templateUrl: 'js/partials/pulses.html', controller: 'PulsesCtrl'});
    $routeProvider.when('/bandwidth', {templateUrl: 'js/partials/bandwidth.html', controller: 'BandwidthCtrl'});
    $routeProvider.when('/db', {templateUrl: 'js/partials/db.html', controller: 'DbCtrl'});
    $routeProvider.when('/about', {templateUrl: 'js/partials/about.html', controller: 'AboutCtrl'});
    $routeProvider.otherwise({redirectTo: '/pulses'});
  }]);

nucalc.controller("RulerCtrl", function($scope) {
  $scope.init = "";
});

nucalc.directive("ruler", function() {
  return {
    restrict: "A",
    scope: { },
    link: function(scope, element, attrs) {
      element.bind("mousedown", function($event) {
        scope.clicked = scope.clicked + 1 || 0
        console.log(scope);
        console.log(attrs.direction, scope.clicked);
      });
    }
  };
});

