(function(){
   "use strict";

  angular.module('directives').directive('bookBlock', [function() {
     return {
     restrict:'AE',
     link: function(scope, element, attrs) {

         bookBlock =  element, // $(element).find("#bb-bookblock"),
         navNext = $(document).find('#bb-nav-next'),
         navPrev = $(document).find( '#bb-nav-prev'),

         bb = element.bookblock( {
             speed : 800,
             perspective : 2000,
             shadowSides : 0.8,
             shadowFlip  : 0.4,
             });

                 var slides = bookBlock.children();

                 // add navigation events
                 navNext.on( 'click touchstart', function() {
                     element.bookblock( 'next' );
                     return false;
                 } );

                 navPrev.on( 'click touchstart', function() {
                     element.bookblock( 'prev' );
                     return false;
                 } );

                 // add swipe events
                 slides.on( {
                     'swipeleft' : function( event ) {
                         bookBlock.bookblock( 'next' );
                         return false;
                     },
                     'swiperight' : function( event ) {
                         bookBlock.bookblock( 'prev' );
                         return false;
                     }
                 } );

                 // add keyboard events
                 $( document ).keydown( function(e) {
                     var keyCode = e.keyCode || e.which,
                         arrow = {
                             left : 37,
                             up : 38,
                             right : 39,
                             down : 40
                         };

                     switch (keyCode) {
                         case arrow.left:
                             bookBlock.bookblock( 'prev' );
                             break;
                         case arrow.right:
                             bookBlock.bookblock( 'next' );
                             break;
                     }
                 } );
     }
   }
 }]);

})();
