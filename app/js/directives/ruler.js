
'use strict';


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
        $parent.bgPos = mid;

        function out($event) {
          if (dragging) {
            dragging = false;
            bgPos = $parent.bgPos;
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
    templateUrl: "js/partials/ruler.html",
  };
});

