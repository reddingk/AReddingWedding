(function(){
 "use strict";

  angular.module('ourStoryCtrl').controller('OurStoryController', ['$state', 'parallaxHelper', function($state, parallaxHelper){
    var vm = this;
    /*Functions*/
    /*Variables*/
    vm.background = parallaxHelper.createAnimator(-0.3, 150, -150);

    vm.story = [
    {/*0*/
      left: { type: 'img', img: 'img/storyimgs/1.jpg' },
      right: {
        type:'content',
        perspective:'grace',
        title:'When I First Saw Him',
        when:'Summer 2007',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {/*1*/
      left: { type: 'img', img: 'img/storyimgs/1.jpg' },
      right: {
        type:'content',
        perspective:'kris',
        title:'First Date',
        when:'Summer 2007',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {/*2*/
      left: { type: 'img', img: 'img/storyimgs/1.jpg' },
      right: {
        type:'content',
        perspective:'grace',
        title:'Giving Each Other Space',
        when:'',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {/*3*/
      left: { type: 'img', img: 'img/storyimgs/1.jpg' },
      right: {
        type:'content',
        perspective:'kris',
        title:'Long Distance Dating',
        when:'',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {/*4*/
      left: { type: 'img', img: 'img/storyimgs/1.jpg' },
      right: {
        type:'content',
        perspective:'grace',
        title:'Making The Move To Maryland',
        when:'',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {/*5*/
      left: { type: 'title', title: 'The Proposal' },
      right: {
        type:'content',
        perspective:'kris',
        title:'The Set Up',
        when:'',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    },
    {/*6*/
      left: {
        type:'content',
        perspective:'grace',
        title:'The "Date"',
        when:'6.11.2016',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      right: {
        type:'content',
        perspective:'kris',
        title:'The Walk That Took Forever',
        when:'6.11.2016',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {/*7*/
      left: { type: 'img', img: 'img/storyimgs/1.jpg' },
      right: {
        type:'content',
        perspective:'grace',
        title:'When He Took Off The Blind Fold',
        when:'6.11.2016',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {/*8*/
      left: { type: 'title', title: 'She Said Yes!!!' },
      right: { type:'video', video: "" }
    }];

    var Page = (function() {

      var config = {
          $bookBlock : $( '#bb-bookblock' ),
          $navNext : $( '#bb-nav-next' ),
          $navPrev : $( '#bb-nav-prev' ),
          $navFirst : $( '#bb-nav-first' ),
          $navLast : $( '#bb-nav-last' )
        },
        init = function() {
          config.$bookBlock.bookblock( {
            speed : 1000,
            shadowSides : 0.8,
            shadowFlip : 0.4
          } );
          initEvents();
        },
        initEvents = function() {

          var $slides = config.$bookBlock.children();

          // add navigation events
          config.$navNext.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'next' );
            return false;
          } );

          config.$navPrev.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'prev' );
            return false;
          } );

          config.$navFirst.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'first' );
            return false;
          } );

          config.$navLast.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'last' );
            return false;
          } );

          // add swipe events
          $slides.on( {
            'swipeleft' : function( event ) {
              config.$bookBlock.bookblock( 'next' );
              return false;
            },
            'swiperight' : function( event ) {
              config.$bookBlock.bookblock( 'prev' );
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
                config.$bookBlock.bookblock( 'prev' );
                break;
              case arrow.right:
                config.$bookBlock.bookblock( 'next' );
                break;
            }
          } );
        };

        return { init : init };
    })();

    Page.init();
    /*vm.events = [{
      badgeClass: 'gColor', side:'right',
      badgeIconClass: 'fa-eye',
      title: 'When I First Saw Him',
      when:"Summer 2007",
      content: 'First Met'
    }, {
      badgeClass: 'kColor', side: 'left',
      badgeIconClass: 'fa-eye',
      title: 'The First We Talked',
      when:"Summer 2007",
      content: 'I remember the first time we talked it was in Thomas Mckean at UD during SEP. We really sat and talked about music for hours.'
    }, {
      badgeClass: 'kColor', side: 'left',
      badgeIconClass: 'fa-coffee',
      title: 'First Date',
      when:"Fall 2007",
      content: 'First Met'
    }, {
      badgeClass: 'gColor', side:'right',
      badgeIconClass: 'fa-gift',
      title: 'Birthday Gift',
      when:"December 2007",
      content: 'First Met'
    }, {
      imagebreak: 'true',
      badgeClass: 'centerimg', side:'',
      badgeIconClass: 'movin-image', content: 'img/storyimgs/1.jpg'
    }];*/
  }]);

})();
