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

            var x = (selectedid == locid ? (defaultX < 0 ? 0 : defaultX) : Math.floor(Math.random() * maxX) - 200);
            var y = (selectedid == locid ? 150 : Math.floor(Math.random() * 701) - 200);
            var angle = (selectedid == locid ? 0 : Math.floor(Math.random() * 80) - 40) ;

            // Check Out of Bounds
            x = (x < -50 ? -40 : x);
            y = (y < 30 ? 30 : y);



            elemMove.style.transform = "translate("+x+"px, "+ y+"px)"+ "rotate("+angle + "deg)";

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
          // Hover image appears
          /*element.bind('mouseover', function() {
            if(itemid != $scope.$eval(attrs.selectedid) && isNav == true){
              var elemMove = angular.element(document).find('.stack-container').children()[itemid];
              elemMove.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
              elemMove.style.zIndex = "11";
            }
          });
          element.bind('mouseout', function() {
            if(itemid != $scope.$eval(attrs.selectedid) && isNav == true){
              var elemMove = angular.element(document).find('.stack-container').children()[id];
              elemMove.style.boxShadow = "none";
              elemMove.style.zIndex = "8";
            }
          });*/
          // Intitial Object Set
          getItemLocation(itemid, null);
        }
      }
    }]);

})();
