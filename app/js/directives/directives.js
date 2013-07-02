'use strict';

/* Directives */

angular.module('nucalc.directives', []).
  directive('ruler', function() {
    return {
      templateUrl: 'views/ruler.html',
      restrict: 'E',
      scope: {
        direction: "@",
        rid: "@"
      },
      //controller: function($scope, $element, $attrs) {
      //  console.log("Hi there!");
      //},
      link: function($scope, $element, $attrs) {
        console.log("$scope", $scope);
        console.log("$element", $element);
        console.log("$attrs", $attrs);
      }
    };
  });



