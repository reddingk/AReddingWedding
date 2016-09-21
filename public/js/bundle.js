
(function () {
	"use strict";

		angular.module('directives', []);
		angular.module('mainCtrl', ['ui.bootstrap']);
		angular.module('headerCtrl', ['ui.bootstrap']);
		angular.module('ourStoryCtrl', ['ui.bootstrap']);
		angular.module('eventsCtrl', ['ui.bootstrap']);
		angular.module('weddingPartyCtrl',['ui.bootstrap']);
		angular.module('rsvpCtrl',['ui.bootstrap']);
		angular.module('registryCtrl',['ui.bootstrap']);
		angular.module('galleryCtrl',['ui.bootstrap']);
		/**/
    angular.module('ARWApp', ['ngMaterial', 'ngAnimate', 'ui.router', 'angular-timeline', 'duParallax', 'config', 'directives', 'mainCtrl', 'headerCtrl', 'ourStoryCtrl', 'eventsCtrl', 'weddingPartyCtrl','rsvpCtrl', 'registryCtrl', 'galleryCtrl']);

})();

(function(){
  'use strict';

  angular.module('config', [ 'ngMaterial' ]);

})();

(function(){

  angular
    .module('config')
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: {
          'content':{
            templateUrl: 'views/home.html'
            /*,controller: 'HomeController as hc'*/
          },
          'header':{
            templateUrl: 'views/templates/_header.html',
            controller: 'HeaderController as hdc'
          }
        }
      })
      .state('app.home', {
        url: "home",
        views: {
          'content@': {
            templateUrl: 'views/home.html'
          }
        }
      })
      .state('app.ourstory', {
        url: "ourstory",
        views: {
          'content@': {
            //templateUrl: 'views/ourstory.html',
            templateUrl: 'views/ourstory2.html',
            controller: 'OurStoryController as oc'
          }
        }
      })
      .state('app.events', {
        url: "events",
        views: {
          'content@': {
            templateUrl: 'views/events.html',
            controller: 'EventsController as ec'
          }
        }
      })
      .state('app.weddingparty', {
        url: "weddingparty",
        views: {
          'content@': {
            templateUrl: 'views/weddingparty.html',
            controller: 'WeddingPartyController as wpc'
          }
        }
      })
      .state('app.rsvp', {
        url: "rsvp",
        views: {
          'content@': {
            templateUrl: 'views/rsvp.html',
            controller: 'RSVPController as rc'
          }
        }
      })
      .state('app.registry', {
        url: "registry",
        views: {
          'content@': {
            templateUrl: 'views/registry.html',
            controller: 'RegistryController as rgc'
          }
        }
      })
      .state('app.gallery', {
        url: "gallery",
        views: {
          'content@': {
            templateUrl: 'views/gallery.html',
            controller: 'GalleryController as gc'
          }
        }
      })
      .state('app.dev', {
        url: "dev",
        views: {
          'content@': {
            templateUrl: 'views/dev.html',
            controller: 'WeddingPartyController as wpc'
          }
        }
      })
      .state('app.construction', {
        url: "underconstruction",
        views: {
          'content@': {
            templateUrl: 'views/construction.html'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }]);


})();

(function(){
 "use strict";

  angular.module('eventsCtrl').controller('EventsController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.myInterval = 7000;
    vm.active = 0;
    vm.eventsList = [
      {title: 'Engagement Party', date:new Date("2017-03-04 14:00:00"),
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nisi vel nibh dictum aliquam vitae et diam. Donec scelerisque nisl at ex faucibus dignissim. Sed ex sem, eleifend quis massa sit amet, bibendum volutpat lorem.",
       location: {name: "Engagement Venue", address:"78910 Wallaby Lane, Washington DC, 20008" },
       photos: [{id:0, image:"img/eventimgs/test1.jpg"}, {id:1, image:"img/eventimgs/test2.jpg"}, {id:2, image:"img/eventimgs/test3.jpg"}]},
      {title: 'The Wedding', date:new Date("2018-05-18 14:00:00"),
       text: "The church where the wedding ceremony will take place on April 6th is St. Patrick's Church, where you'll find us most Sunday mornings.",
       location: {name: "Church Venue", address:"11018 Guy R Brewer Blvd, Jamaica, NY 11433" },
       photos: [{id:0, image:"img/eventimgs/test4.jpg"}],
       additionalinfo: {}

     },
      {title: 'The Reception', date:new Date("2018-05-18 17:00:00"),
       text: "Maecenas porta orci nec pretium ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et felis non odio luctus suscipit. Donec eget pellentesque dui. Sed interdum facilisis magna in vehicula.",
       location: {name: "Venue", address:"1234 Place Road, New York, NY 11433" },
       photos: [{id:0, image:"img/eventimgs/test5.jpg"}, {id:1, image:"img/eventimgs/test6.jpg"}, {id:2, image:"img/eventimgs/test7.jpg"}],
       additionalinfo:{}
     }
    ];

  }]);

})();

(function(){
 "use strict";

  angular.module('galleryCtrl').controller('GalleryController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.isSelected = isSelected;
    vm.changeSelected = changeSelected;

    /*Variables*/
    vm.items = [
      {"id":0, "img":"t0.jpg", "title":"" },
      {"id":1, "img":"t1.jpg", "title":"" },
      {"id":2, "img":"t2.jpg", "title":"" },
      {"id":3, "img":"t3.jpg", "title":"" },
      {"id":4, "img":"t4.jpg", "title":"" },
      {"id":5, "img":"t5.jpg", "title":"" },
      {"id":6, "img":"t6.jpg", "title":"" },
      {"id":7, "img":"t7.jpg", "title":"" },
      {"id":8, "img":"t8.jpg", "title":"" },
      {"id":9, "img":"t9.jpg", "title":"" },
      {"id":10, "img":"t10.jpg", "title":"" },
      {"id":11, "img":"t11.jpg", "title":"" }
    ];

    vm.selectedid = vm.items[0].id;


    function isSelected(id)
    {
      return (id == vm.selectedid ? "selected" : "");
    }

    function changeSelected(item)
    {
      vm.selectedid = item.id;
    }
  }]);

})();

(function(){
 "use strict";

  angular.module('headerCtrl').controller('HeaderController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.checkActivePage = checkActivePage;
    vm.selectPage = selectPage;

    /*Variables*/
    vm.selected = null;

    vm.mainImg = "img/BrideAGroom.jpg"
    vm.pages = [
      {"id":0, "name":"ourstory", "title":"Our Story", "state":"app.ourstory", "icon":"fa-gratipay", "svg":"shapes-1.svg" },
      {"id":1, "name":"weddingparty", "title":"Wedding Party", "state":"app.weddingparty", "icon":"fa-users", "svg":"party-dancing.svg"},
      {"id":2, "name":"events", "title":"Events", "state":"app.events", "icon":"fa-bell-o", "svg":"party.svg"},
      {"id":3, "name":"rsvp", "title":"RSVP", "state":"app.rsvp", "icon":"fa-envelope-o", "svg":"letter.svg"},
      {"id":4, "name":"registry", "title":"Registry", "state":"app.registry", "icon":"fa-gift", "svg":"gifts.svg" },
      {"id":5, "name":"gallery", "title":"Gallery", "state":"app.gallery", "icon":"fa-camera-retro", "svg":"shapes.svg"}
    ];

    function checkActivePage(current) {
         var currentPage = $state;
         if (currentPage != null && currentPage.current.name.indexOf(current) > -1) { return true; }
         else { return false; }
    }

    function selectPage(newstate) {
      $state.go(newstate.link);
    }

  }]);

})();

(function(){
 "use strict";

  angular.module('mainCtrl').controller('MainController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.checkActivePage = checkActivePage;
    vm.selectPage = selectPage;
    vm.togglePage = togglePage;

    /*Variables*/
    vm.selected = null;
    vm.cardClosed = true;
    vm.statetest = $state.current.name;

    /*Card Themes*/
    vm.cardThemes = [1,2,5,4];
    vm.selectedTheme = vm.cardThemes[Math.floor(Math.random() * 2)];

    function checkActivePage(current) {
         var currentPage = $state;
         if (currentPage != null && currentPage.current.name.indexOf(current) > -1) { return true; }
         else { return false; }
    }

    function selectPage(newstate) {
      if(!checkActivePage(newstate))
        $state.go(newstate);
    }

    function togglePage(newstate) {
      if(!checkActivePage(newstate)){
        if(!vm.cardClosed){
          vm.cardClosed = true;
        }

        setTimeout(function () {
          vm.cardClosed = false;
          selectPage(newstate);
        }, 1100);
      }
      else {
        vm.cardClosed = false;
      }
    }

  }]);

})();

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

(function(){
 "use strict";

  angular.module('registryCtrl').controller('RegistryController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.selected = null;

    vm.items = [
      {"id":0, "name":"AMAZON", "url":"https://www.amazon.com/", "img":"amazon-logo.png" },
      {"id":1, "name":"NEWLYWISH", "url":"https://www.newlywish.com/", "img":"newlywish.png"},
      {"id":2, "name":"BED, BATH & BEYOND", "url":"http://www.bedbathandbeyond.com/", "img":"BedBathBeyond-Logo.png"}
    ];

  }]);

})();

(function(){
 "use strict";

  angular.module('rsvpCtrl').controller('RSVPController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.CheckKey = CheckKey;
    /*Variables*/
    vm.userkey = "";
    vm.rsvpKey = "ReddingWedding2018";
    vm.status = "";

    /**/
    function CheckKey() {
      if(vm.userkey.toLowerCase() == vm.rsvpKey.toLowerCase())
      { vm.status = "UNLOCKED";}
      else
      { vm.status = "LOCKED"; }
    }

  }]);

})();

(function(){
 "use strict";

  angular.module('weddingPartyCtrl').controller('WeddingPartyController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.clickParty = clickParty;
    vm.isSelected = isSelected;

    /*Variables*/
    vm.selectedParty = null;
    vm.specialParty = { groomsman: { name: "Jason Pena", image: "suit-on-hanger.svg",  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."},
                        bridesmaids: { name: "Naomi Manning", image:"dress-on-statue.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
                      };
    vm.partylist = [
      { groomsman: { name: "Kamron Redding", image: "tux.svg",  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."},
        bridesmaids: { name: "Nicole Manning", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Ayi Mensah", image: "tux.svg",  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."},
        bridesmaids: { name: "Jackie Stevens", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Dwayne Washington", image: "tux.svg",  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."},
        bridesmaids: { name: "Ashley Allyn", image:"bride-dress.svg", bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Greg Parker", image: "tux.svg",  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."},
        bridesmaids: { name: "Nina Dawson", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Andre Valines", image: "tux.svg",  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."},
        bridesmaids: { name: "Kaila Suarez", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Khalin Redding", image: "tux.svg",  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."},
        bridesmaids: { name: "Dominique Bridges", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Marquis Waters", image: "tux.svg",  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."},
        bridesmaids: { name: "Asia Davis", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Vince Wilson", image: "tux.svg",  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."},
        bridesmaids: { name: "Daphne Blakey", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      }
    ];

    /*Functions*/
    function clickParty(party){
      if(vm.selectedParty == party) {
        vm.selectedParty = null;
      }
      else {
        vm.selectedParty = party;
      }
    }
    function isSelected(party) {
      if(vm.selectedParty == party) {
        return true;
      }
      else {
        return false;
      }
    }

  }]);

})();

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

(function(){
   "use strict";

    angular.module('directives').directive('navHold', ['$window', function($window) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {

          angular.element($window).bind("scroll", function() {

            var topSection = angular.element(document.getElementsByClassName("nav-top"))[0];
            var windowp = angular.element($window)[0];

            var topThreshhold = (topSection.offsetTop + topSection.offsetHeight);
            //var topThreshhold = element[0].offsetTop - element[0].clientHeight;

            if(windowp.pageYOffset >= topThreshhold){
              if(!element.hasClass("screenPass")){
                element.addClass("screenPass");
              }
            }
            else {
              if(element.hasClass("screenPass")){
                element.removeClass("screenPass");
              }
            }

          });
        }
      }

    }]);

})();

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
            //var elemMove = element.parent().children()[locid];
            var elemMove = angular.element(document).find('.stack-container').children()[locid];

            var pageWidth = window.innerWidth;
            var defaultX = Math.floor(pageWidth * (pageWidth < 801 ? .084 : .286));
            var maxX = Math.floor(pageWidth * .86);

            var x = (selectedid == locid ? defaultX : Math.floor(Math.random() * maxX) - 200);
            //var x = (selectedid == locid ? 400 : Math.floor(Math.random() * 1201) - 200);
            var y = (selectedid == locid ? 150 : Math.floor(Math.random() * 701) - 200);
            var angle = (selectedid == locid ? 0 : Math.floor(Math.random() * 80) - 40) ;
            // Check Out of Bounds
            x = (x < -50 ? -40 : x);
            y = (y < 30 ? 30 : y);

            //var trans = {"transform": "translate("+x+"px, "+ y+"px)"+ "rotate("+angle + "deg)"};
            //element.css(trans);
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
