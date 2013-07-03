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
  $scope.value = 1;
  $scope.setValue = function(currPos) {
    $scope.value = currPos - $scope.startPos;
    console.log("value", $scope.value);
  };
  $scope.$watch("value", function(newV, oldV) {
    console.log("updated");
  }, true);
});

nucalc.directive("ruler", function() {
  var mid = (window.innerWidth/2 >> 0);
  var midPx = mid + "px";
  
  return {
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
        var $parent = scope.$parent;
        $parent.startPos = mid;

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
            $parent.bgPos = bgPos + deltaX;
            $parent.setValue($parent.bgPos);
            elm.style.backgroundPositionX = $parent.bgPos + "px";        
          }
        });
  
        $element.bind("mouseup", out);
        $element.bind("mouseleave", out);
        $element.bind("mouseout", out);

      }
    },
    link: function(scope, element, attrs) {
      scope.$watch("value", function(newV, oldV) {
        console.log("directive watch fired", scope.$id);  
      });          
    },
    templateUrl: "js/partials/ruler.html",
  };
});

nucalc.directive("rulerValue", function() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      val: "@"
    },
    templateUrl: "js/partials/rulerValue.html"
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

