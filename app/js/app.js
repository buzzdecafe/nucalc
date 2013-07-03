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
  $scope.bgPos = "ctrl";
});

nucalc.directive("ruler", function() {
  var mid = (window.innerWidth/2 >> 0);
  var midPx = mid + "px";
  
  return {
    controller: "RulerCtrl",
    restrict: "E",
    replace: true,
    scope: { 
      direction: "@",
      rid: "@"
    },
    compile: function(elem, attrs, xclude) {
      var dragging, startX, deltaX, bgPos = mid;
      
      // align ruler left edge to center
      elem[0].style.backgroundPositionX = midPx;

      return function postLink(scope, $element, attrs, ctrl) {
        var elm = $element[0];
        scope.startPos = mid;

        function out($event) {
          if (dragging) {
            dragging = false;
          }
        }

        $element.bind("mousedown", function($event) {
          dragging = true;
          startX = $event.clientX;
          deltaX = 0;
        });
      
        $element.bind("mousemove", function($event) {
          if (dragging) {
            deltaX = $event.clientX - startX;
            scope.bgPos = bgPos + deltaX;
            elm.style.backgroundPositionX = scope.bgPos + "px";        
          }
        });
  
        $element.bind("mouseup", out);
        $element.bind("mouseleave", out);
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
      title: "@",
      top: "@",
      bottom: "@",
    },
    templateUrl: "js/partials/rulerpair.html"
  };
});

