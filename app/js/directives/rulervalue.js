
'use strict';


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

