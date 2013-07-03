
'use strict';


nucalc.controller("RulerCtrl", function($scope) {
  var RWIDTH = 360; // width of bg img
  var MIN = 0;
  var MAX = Math.log(1000);
  var SCALE = MAX / RWIDTH;

  $scope.prop = "Ruler Controller";
  $scope.value = 1;
  $scope.setValue = function(currPos) {
    $scope.value = Math.exp(($scope.startPos - currPos) * SCALE);
    $scope.$apply();
  };
  $scope.$watch("value", function(newV, oldV) { }, true);

});

