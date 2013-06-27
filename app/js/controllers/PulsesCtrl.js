function PulsesCtrl($scope) {
  var undef;
  $scope.label = "Pulses";

  $scope.v = 0;
  $scope.dragged = 0;
  $scope.dragging = false;

  $scope.inc = function() {
    $scope.v = ++$scope.v % 10;
    return $scope.v;
  };

  $scope.dragging = false;
  $scope.startX;
  $scope.deltaX = 0;
  $scope.bgPos = 0;
  $scope.startdrag = function($event) {
    $scope.dragging = true;
    $scope.bgPos = parseInt($event.srcElement.style.backgroundPositionX, 10) || 0;        
    $scope.startX = $event.clientX;
    $scope.deltaX = 0;
  };

  $scope.drag = function($event) {
    if ($scope.dragging) {
      $scope.deltaX = $event.clientX - $scope.startX;
      $event.srcElement.style.backgroundPositionX = ($scope.bgPos + $scope.deltaX) + "px";        
    }
  };

  $scope.stopdrag = function($event) {
    $scope.dragging = false;
    $scope.bgPos = parseInt($event.srcElement.style.backgroundPositionX, 10) || 0;        
  };
}
