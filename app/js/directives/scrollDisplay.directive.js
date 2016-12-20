(function(){
   "use strict";

    angular.module('directives').directive('scrollDisplay', ['$window', function($window) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {
          var hiddenLoc = 80;
          angular.element($window).bind("scroll", function() {
            var windowp = angular.element($window)[0];
            var popup = angular.element(document).find('.md-dialog-container');

            if((windowp.pageYOffset >= hiddenLoc || popup.length > 0) && !element.hasClass("noshow")){
              element.addClass('noshow');
              // Trial
              element.removeClass('show');
            }
            else if((windowp.pageYOffset < hiddenLoc && popup.length == 0)&& element.hasClass("noshow")){
              element.removeClass('noshow');
              // Trial
              if(!element.hasClass("show")){
                element.addClass('show');
              }
            }
          });
        }
      }

    }]);

})();
