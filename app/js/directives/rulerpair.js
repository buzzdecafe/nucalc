
'use strict';



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

