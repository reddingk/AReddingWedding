(function(){
   "use strict";

    angular.module('directives').directive('photoMotion', ['$window', function() {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {

          var itemid = $scope.$eval(attrs.itemid);
          var itemcount = $scope.$eval(attrs.itemcount);
          var isNav = $scope.$eval(attrs.isnav);

          //-item position function
          function getItemLocation(locid, elemId){
            //-selected id
            var selectedid = (elemId == null ? $scope.$eval(attrs.selectedid) : elemId);

            // Get element by id
            var stackCont = angular.element(document).find('.stack-container');
            var elemMove = stackCont.children()[locid];
            var imgElem = elemMove.children[0].children[0];

            var pageWidth = window.innerWidth;
            var offsetX = ((imgElem.naturalWidth * ( pageWidth < 801 ? 170 : 320)) / imgElem.naturalHeight);
            var defaultX = Math.floor((stackCont[0].offsetWidth - offsetX)/2);
            var maxX = Math.floor(pageWidth * .86);

            var x =  Math.floor(Math.random() * maxX) - 200;
            var y = Math.floor(Math.random() * 501) - 200;
            var angle =  Math.floor(Math.random() * 80) - 40;

            // Check Out of Bounds
            x = (x < -50 ? -40 : x);
            y = (y < 30 ? 30 : y);



            elemMove.style.transform = (selectedid == locid ? "translate(-50%, -30%) rotate(0deg)" : "translate("+x+"px, "+ y+"px)"+ "rotate("+angle + "deg)");

          }

          // On click Set selected id
          element.bind('click', function() {
            if(itemid != $scope.$eval(attrs.selectedid)){
              for(var i=0; i < itemcount; i++)
              {
                getItemLocation(i, itemid);
              }
            }
          });
          // Intitial Object Set
          getItemLocation(itemid, null);
        }
      }
    }]);

})();
