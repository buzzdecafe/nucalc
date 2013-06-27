'use strict';

/* Directives */


angular.module('nucalc.directives', []).
  directive('ruler', function() {
    return {
      templateUrl: 'views/ruler.html',
      restrict: 'E',
      scope: {
        direction: "bind",
        rid: "bind"
      },
      controller: function($scope, $element, $attrs) {
        console.log("Hi there!");
      }
    };
  });



