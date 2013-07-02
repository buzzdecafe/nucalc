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
  $scope.prop = "Ruler Controller";
});

nucalc.directive("ruler", function() {
  var mid = (window.innerWidth/2 >> 0) + "px";
  return {
    restrict: "E",
    replace: true,
    scope: { 
      direction: "@",
      rid:"@"
    },
    compile: function(elem, attrs, xclude) {
      var dragging, startX, deltaX, bgPos;
      
      // align ruler left edge to center
      elem[0].style.backgroundPositionX = bgPos = mid;

      // return postLink function
      return function postLink(scope, $element, attrs) {
        var elem = $element[0];

        function out($event) {
          dragging = false;
          bgPos = parseInt(elem.style.backgroundPositionX, 10);
        }

        $element.bind("mousedown", function($event) {
          dragging = true;
          startX = $event.clientX;
          deltaX = 0;
        });
      
        $element.bind("mousemove", function($event) {
          if (dragging) {
            deltaX = $event.clientX - startX;
            elem.style.backgroundPositionX = (bgPos + deltaX) + "px";        
          }
        });
  
        $element.bind("mouseup", out);
        
        $element.bind("mouseout", out);

      }
    },
    templateUrl: "js/partials/ruler.html",
  };
});

nucalc.directive("rulerPair", function() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      top: "@",
      bottom: "@"
    },
    templateUrl: "js/partials/rulerpair.html"
  };
});

