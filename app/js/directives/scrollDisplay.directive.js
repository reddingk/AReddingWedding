(function(){
   "use strict";

    angular.module('directives').directive('scrollDisplay', ['$window', function($window) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {
          var hiddenLoc = 80;
          angular.element($window).bind("scroll", function() {
            var windowp = angular.element($window)[0];
            if(windowp.pageYOffset >= hiddenLoc && !element.hasClass("noshow")){
              element.addClass('noshow');
            }
            else if(windowp.pageYOffset < hiddenLoc && element.hasClass("noshow")){
              element.removeClass('noshow');
            }
          });
        }
      }

    }]);

})();