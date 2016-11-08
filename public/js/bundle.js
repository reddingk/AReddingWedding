
(function () {
	"use strict";

		angular.module('directives', []);
		angular.module('mainCtrl', ['ui.bootstrap', 'ngAnimate']);
		angular.module('headerCtrl', ['ui.bootstrap', 'ngAnimate']);
		angular.module('ourStoryCtrl', ['ui.bootstrap']);
		angular.module('eventsCtrl', ['ui.bootstrap']);
		angular.module('weddingPartyCtrl',['ui.bootstrap']);
		angular.module('rsvpCtrl',['ui.bootstrap']);
		angular.module('registryCtrl',['ui.bootstrap']);
		angular.module('galleryCtrl',['ui.bootstrap', 'ngAnimate']);
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
            templateUrl: 'views/ourstory.html',
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
       location: {name: "TBD", address:"TBD" },
       photos: [{id:0, image:"img/eventimgs/test1.jpg"}, {id:1, image:"img/eventimgs/test2.jpg"}, {id:2, image:"img/eventimgs/test3.jpg"}]},
      {title: 'The Wedding', date:new Date("2018-05-19 15:00:00"),
       text: "We will officially be jumping the broom at Grace's home church, Bethel Gospel Tabernacle.  All are welcome to our ceremony to watch us tie the knot and take as many pictures as possible.",
       location: {name: "Bethel Gospel Tabernacle", address:"11025 Guy R Brewer Blvd., Jamaica, NY 11433" },
       photos: [{id:0, image:"img/eventimgs/Church/C0.jpg"}],
       additionalinfo: []
     },
      {title: 'The Reception', date:new Date("2018-05-19 19:00:00"),
       text: "Our wedding reception will be hosted in the beautiful Fox Hollow, as much as we would love to have everyone there it is invitation only.  This elegant Long Island wedding venue is spread across a picturesque 8-acre estate, accented with lush gardens, lively waterfalls, and fountains.",
       location: {name: "The Fox Hollow", address:"7725 Jericho Turnpike, Woodbury, New York 11797" },
       photos: [{id:0, image:"img/eventimgs/Reception/fh0.jpg"}, {id:1, image:"img/eventimgs/Reception/fh1.jpg"}, {id:2, image:"img/eventimgs/Reception/fh2.jpg"}, {id:3, image:"img/eventimgs/Reception/fh3.jpg"}, {id:4, image:"img/eventimgs/Reception/fh4.jpg"}, {id:5, image:"img/eventimgs/Reception/fh5.jpg"}, {id:6, image:"img/eventimgs/Reception/fh6.jpg"}, {id:7, image:"img/eventimgs/Reception/fh7.jpg"}, {id:8, image:"img/eventimgs/Reception/fh8.jpg"}],
       additionalinfo:[{"type":"text", "content":"Located on the grounds of Fox Hollow is the Fox Hollow Boutique All-Suites Hotel.  We have blocked rooms for our guests at this hotel to help you fully enjoy this day with us."}, {"type":"text", "content":"To reserve your room:"},{"type":"text", "content":"Please call 516-921-1415 and mention that you are a guest of the Redding/Manning Wedding."}, {"type":"link", "content":"More Information", "url":"http://www.thefoxhollow.com/hotel.aspx"}]
     },
     {title: 'The Honeymoon', date:new Date("2018-05-22 12:00:00"),
      text: "The Honeymoon location, Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et felis non odio luctus suscipit. Donec eget pellentesque dui. Sed interdum facilisis magna in vehicula.",
      location: {name: "Kaua'i Marriott Resort", address:"3610 Rice St, Lihue, HI 96766" },
      photos: [{id:0, image:"img/eventimgs/test8.jpg"},{id:1, image:"img/eventimgs/test9.jpg"},{id:2, image:"img/eventimgs/test10.jpg"}],
      additionalinfo: []
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
    vm.changeGallery = changeGallery;
    vm.navSelected = navSelected;

    /*Variables*/
    vm.items = [{
        title: "Thru The Years",
        images: [{"id":0, "img":"college/t0.jpg", "title":"" },
        {"id":1, "img":"college/t1.jpg", "title":"" },
        {"id":2, "img":"college/t2.jpg", "title":"" },
        {"id":3, "img":"college/t3.jpg", "title":"" },
        {"id":4, "img":"college/t4.jpg", "title":"" },
        {"id":5, "img":"college/t5.jpg", "title":"" },
        {"id":6, "img":"college/t6.jpg", "title":"" },
        {"id":7, "img":"college/t7.jpg", "title":"" },
        {"id":8, "img":"college/t8.jpg", "title":"" },
        {"id":9, "img":"college/t9.jpg", "title":"" },
        {"id":10, "img":"college/t10.jpg", "title":"" },
        {"id":11, "img":"college/t11.jpg", "title":"" },
        {"id":12, "img":"college/t12.jpg", "title":"" },
        {"id":13, "img":"college/t13.jpg", "title":"" },
        {"id":14, "img":"college/t14.jpg", "title":"" },
        {"id":15, "img":"college/t15.jpg", "title":"" },
        {"id":16, "img":"college/t16.jpg", "title":"" },
        {"id":17, "img":"college/t17.jpg", "title":"" },
        {"id":18, "img":"college/t18.jpg", "title":"" },
        {"id":19, "img":"college/t19.jpg", "title":"" }]
      },
      {
        title: "Engagement Photos",
        images: [{"id":0, "img":"test2/t0.jpg", "title":"" },
        {"id":1, "img":"test2/t1.jpg", "title":"" },
        {"id":2, "img":"test2/t2.jpg", "title":"" },
        {"id":3, "img":"test2/t3.jpg", "title":"" },
        {"id":4, "img":"test2/t4.jpg", "title":"" },
        {"id":5, "img":"test2/t5.jpg", "title":"" },
        {"id":6, "img":"test2/t6.jpg", "title":"" },
        {"id":7, "img":"test2/t7.jpg", "title":"" },
        {"id":8, "img":"test2/t8.jpg", "title":"" },
        {"id":9, "img":"test2/t9.jpg", "title":"" },
        {"id":10, "img":"test2/t10.jpg", "title":"" },
        {"id":11, "img":"test2/t11.jpg", "title":"" },
        {"id":12, "img":"test2/t12.jpg", "title":"" },
        {"id":13, "img":"test2/t13.jpg", "title":"" },
        {"id":14, "img":"test2/t14.jpg", "title":"" }]
      }];

    vm.displayItems = vm.items[0].images;
    vm.selectedid = vm.displayItems[0].id;


    function isSelected(id)
    {
      return (id == vm.selectedid ? "selected" : "");
    }

    function changeSelected(item)
    {
      vm.selectedid = item.id;
    }
    function navSelected(item) {
      return (item.images == vm.displayItems ? "selected" : "");
    }
    function changeGallery(item){
      if(navSelected(item) == ""){
        vm.selectedid = 0;
        vm.displayItems = item.images;
      }
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
      {"id":0, "name":"ourstory", "title":"Our Story", "state":"app.ourstory", "icon":"fa-gratipay", "svg":"people.svg" },
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

    var navMain = $("#arwNavbar");
     navMain.on("click", ".link", null, function () {
         navMain.collapse('hide');
     });

  }]);

})();

(function(){
 "use strict";

  angular.module('mainCtrl').controller('MainController', ['$state', function($state){
    var vm = this;
    /*Variables*/
    vm.selected = null;
    vm.cardClosed = true;
    vm.statetest = $state.current.name;

    /*Card Themes*/
    vm.cardThemes = [1,2,5,4];
    vm.selectedTheme = vm.cardThemes[Math.floor(Math.random() * 2)];

    /*Functions*/
    vm.checkActivePage = checkActivePage;
    vm.selectPage = selectPage;
    vm.togglePage = togglePage;
    vm.toggleCard = toggleCard;

    function toggleCard(control){
      if(control == "open")
      { vm.cardClosed = false; }
      else if(control == "close")
      { vm.cardClosed = true; }
      else if(control == "toggle")
      { vm.cardClosed = !vm.cardClosed; }

      if(vm.cardClosed) {
        var navMain = $("#arw-inside-nav");
        navMain.collapse('hide');
      }
    }
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
    vm.getEmbededURL = getEmbededURL;
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
      right: { type:'video', video: "https://www.youtube.com/watch?v=awMIbA34MT8" }
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


    // Functions
    function getEmbededURL(url) {
        var urlid = url.split("v=")[1];

        return "https://www.youtube.com/embed/" + urlid;
    }

    Page.init();
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
    vm.specialParty = { groomsman: { name: "Jason Pena", image: "suit-on-hanger.svg",  bio:"Mr. Pena the old man of the group my former roommate and one of my truest friends.  He currently lives out in Boston, MA, even  though i’m working on getting him to move to MD.  Despite this I talk to him more than anyone (other than Grace I guess) and our friendship is real.  With everything we have been through he had to be the one chosen to officially be my Best Man."},
                        bridesmaids: { name: "Naomi Manning", image:"dress-on-statue.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
                      };
    vm.partylist = [
      { groomsman: { name: "Kamron Redding", image: "tux.svg",  bio:"The middle of the three Redding boys and our family chaplin.  He lives in Germantown, Md but the two of us have grown up together in more states than I care to count.  I have watch him grow into a great person from working as a registered Nurse at the Washington Hospital Center, becoming a brother of Alpha Phi Alpha Fraternity inc., to starting a non-profit to feed the homeless ‘1ReddBag’."},
        bridesmaids: { name: "Nicole Manning", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Ayi Mensah", image: "tux.svg",  bio:"Ayi was one of the people I grew up with in Maryland from middle school to high school football.  Despite getting his degree and working as a personal trainer I think I have influenced him to join the technical world as he works to become a certified Database Administrator. Even tho he is a Golden State Fan I can consider him one of my closest friends and a person that was a lock to be one of my groomsman."},
        bridesmaids: { name: "Jackie Stevens", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Dwayne Washington", image: "tux.svg",  bio:"If you know me you know I have moved a lot in my life, This man hands down has known me longer than any non family member.  Due to our longevity of a friendship I have seen him grow from a little knuckleheads to having his own productions group, also putting together the proposal video for us.  Despite the fact he sometimes gets on my last nerves he’s one of my best friends. "},
        bridesmaids: { name: "Ashley Allyn", image:"bride-dress.svg", bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Greg Parker", image: "tux.svg",  bio:"Mr. Parker aka the Father of my Goddaughter she’s going to be very taken care of as she grows up. I feel like I have known this guy longer than I probably have this may because I have more stories with this guy then anybody I know. He possibly the only person on the list i’ll admit might have a better jump shot than me.  One of those people that is family without being family."},
        bridesmaids: { name: "Nina Dawson", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Andre Valines", image: "tux.svg",  bio:"I met this guy at University of Delaware shooting some b-ball outside of the school and we have been close almost instantly. I call him my UD son (even tho he hates it) but despite his age he is one of the people I look up too.  From working with the youth to becoming a prominent Legalshield associate i’ve already seen him do great things."},
        bridesmaids: { name: "Kaila Suarez", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Khalin Redding", image: "tux.svg",  bio:"The youngest of the Redding boys, I truly can remember thinking we were going to take him back to the hospital one day.  He has really grown up watching him finish his engineering degree at Howard University now I feel like the odd one out not going to an HBCU.  He is definitely a person you don’t get into a debate with because you won’t win."},
        bridesmaids: { name: "Dominique Bridges", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Marquis Waters", image: "tux.svg",  bio:"If you don’t know him you need too he brings life to any event.  I have had the opportunity to be apart of the story called ‘The life of Quis’.  From spades nights around the campus of University of Delaware, to watching him becoming a brother of Phi Beta Sigma Fraternity Inc., graduating with a major in African American Studies, to becoming a part of the U.S. Air Force.  With all of that I’m glad he could be there with me on my day."},
        bridesmaids: { name: "Asia Davis", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Vince Wilson", image: "tux.svg",  bio:"If someone asked me who I would want to grow up to be like I would probably say Vince.  Two Degrees before 25, works at an Ivy League University, brother of Omega Psi Phi Fraternity Inc., and can out dress anyone you know.  Me and him go back to FAME back in high school and now have taken trips from Miami, New Orleans, to Mexico.  With all of these places he was one of the first people I wanted to add to my groomsman."},
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


angular.module('directives')
  .directive('scrollTo', ['ScrollTo', function(ScrollTo){
    return {
      restrict : "AC",
      compile : function(){

        return function(scope, element, attr) {
          element.bind("click", function(event){
            ScrollTo.idOrName(attr.scrollTo, attr.offset);
          });
        };
      }
    };
  }])
  .service('ScrollTo', ['$window', 'ngScrollToOptions', function($window, ngScrollToOptions) {
    this.idOrName = function (idOrName, offset, focus) {//find element with the given id or name and scroll to the first element it finds
        var document = $window.document;

        if(!idOrName) {//move to top if idOrName is not provided
          $window.scrollTo(0, 0);
        }

        if(focus === undefined) { //set default action to focus element
            focus = true;
        }

        //check if an element can be found with id attribute
        var el = document.getElementById(idOrName);
        if(!el) {//check if an element can be found with name attribute if there is no such id
          el = document.getElementsByName(idOrName);

          if(el && el.length)
            el = el[0];
          else
            el = null;
        }

        if(el) { //if an element is found, scroll to the element
          if (focus) {
              el.focus();
          }

          ngScrollToOptions.handler(el, offset);
        }
        //otherwise, ignore
      }

  }])
  .provider("ngScrollToOptions", function() {
    this.options = {
      handler : function(el, offset) {
        if (offset) {
          var top = $(el).offset().top - offset;
          window.scrollTo(0, top);
        }
        else {
          el.scrollIntoView();
        }
      }
    };
    this.$get = function() {
      return this.options;
    };
    this.extend = function(options) {
      this.options = angular.extend(this.options, options);
    };
  });
