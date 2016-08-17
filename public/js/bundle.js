
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
       photos: [{id:0, image:"img/eventimgs/test4.jpg"}]},
      {title: 'The Reception', date:new Date("2018-05-18 17:00:00"),
       text: "Maecenas porta orci nec pretium ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et felis non odio luctus suscipit. Donec eget pellentesque dui. Sed interdum facilisis magna in vehicula.",
       location: {name: "Venue", address:"1234 Place Road, New York, NY 11433" },
       photos: [{id:0, image:"img/eventimgs/test5.jpg"}, {id:1, image:"img/eventimgs/test6.jpg"}, {id:2, image:"img/eventimgs/test7.jpg"}]}
    ];

  }]);

})();

(function(){
 "use strict";

  angular.module('galleryCtrl').controller('GalleryController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.switchItem = switchItem;
    vm.nextItem = nextItem;
    vm.prevItem = prevItem;

    /*Variables*/  
    vm.items = [
      {"id":0, "img":"t0.jpg" },
      {"id":1, "img":"t1.jpg" },
      {"id":2, "img":"t2.jpg" },
      {"id":3, "img":"t3.jpg" },
      {"id":4, "img":"t4.jpg" },
      {"id":5, "img":"t5.jpg" },
      {"id":6, "img":"t6.jpg" },
      {"id":7, "img":"t7.jpg" },
      {"id":8, "img":"t8.jpg" },
      {"id":9, "img":"t9.jpg" },
      {"id":10, "img":"t10.jpg" },
      {"id":11, "img":"t11.jpg" }
    ];

    vm.selecteditem = vm.items[0];
    vm.displayitems = vm.items.slice(1, vm.items.length);

    /**/
    function switchItem (newid) {
      var tmpitems = [];
      for(var i =0; i < vm.items.length; i++){
        if(vm.items[i].id == newid) {
          vm.selecteditem = vm.items[i];
        }
        else {
          tmpitems.push(vm.items[i]);
        }
      }
      vm.displayitems = tmpitems;
    }

    function nextItem(){
      var tmpid = ((vm.selecteditem.id + 1) >= vm.items.length ? 0 : vm.selecteditem.id + 1);
      switchItem(tmpid);
    }

    function prevItem(){
      var tmpid = (vm.selecteditem.id == 0 ? (vm.items.length - 1) : vm.selecteditem.id - 1);
      switchItem(tmpid);
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
    vm.events = [{
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
    }];



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

    /*Variables*/
    vm.specialParty = { groomsman: { name: "Jason Pena", image: "suit-on-hanger.svg",  bio:"This guy Jason, we met in college I think our first convo was about how he was not trying to steal Grace from me.  But after that he has been one of the best friends I have. From roommates, to ‘Balling for Jesus’, to losing an ID in a snow blower we have had some good times."},
                        bridesmaids: { name: "Naomi Manning", image:"dress-on-statue.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
                      };
    vm.partylist = [
      { groomsman: { name: "Kamron Redding", image: "tux.svg",  bio:"My brother the one who stole me only child life style from me when he came in the world.  We have grown up together in more states than I care to count.  I have watch him grow into a great person being the one who most definitely says the prayer at dinner to starting a non-profit to feed the homeless ‘1ReddBag’."},
        bridesmaids: { name: "Nicole Manning", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Ayi Mensah", image: "tux.svg",  bio:"My first HS football practice I stepped on the field had to go head to head against this guy.  Thinking he was my friend I thought it would be ok…. Lets just say I had to decide if I was really about that football life.  But from playing ball in every court in Maryland to skipping class to go to make food in Mrs. Turneys class this guy has been one of my friends to the fullest even if he is a Golden State Fan."},
        bridesmaids: { name: "Jackie Stevens", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Dwayne Washington", image: "tux.svg",  bio:"If you know me you know I have moved a lot in my life, This man hands down has known me longer than any non family member.  We played ball together, Worked together (idk how we kept that job), Got on each others nerves but still worked it out, and if you ask him he started the nickname that’s followed me since Middle school.  Through it all one of my truest friends. "},
        bridesmaids: { name: "Ashley Allyn", image:"bride-dress.svg", bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Greg Parker", image: "tux.svg",  bio:"Mr. Parker, aka Gregorio Vasquez, aka G da B, aka the Father of my Goddaughter I feel like I have known this guy longer than I probably have.  That probably is because I think I have more stories with this guy then anybody I know and possibly the only person on the list i’ll admit might have a better jump shot than me.  One of those people that is family without being family."},
        bridesmaids: { name: "Nina Dawson", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Andre Valines", image: "tux.svg",  bio:"‘Goodness’ the man that can probably palm the moon with his hands.  I met this guy playing at UD playing ball in the little bob and I promise you I thought he was my age of older.  He is one of the truest characters I know but enjoys life in the same mindset as me.  Even tho I call him my ‘Lowkey Son’ he one of those people you can’t help look too."},
        bridesmaids: { name: "Kaila Suarez", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Khalin Redding", image: "tux.svg",  bio:"The youngest of the Redding boys, I truly can remember thinking we were going to take him back to the hospital one day.  This kid has really grown up a lot you wouldn’t believe it.  Seeing him finish his engineering degree at Howard Univ. now I feel like the odd one out not going to an HBCU.  He is definately comedy of a person but don’t get into a debate with him tho you won’t win."},
        bridesmaids: { name: "Dominique Bridges", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Marquis Waters", image: "tux.svg",  bio:"‘Quis’ might have hands down provided us with more ad-libs and sound bite’s than anybody I know and if I ever won an award I would need him to give my introduction.  Jokes for days and my unofficial spades Rival / Partner and another one that I have stories for days with this guy.  From Erica Coleman’s class, to the 910 rap battles, to making PBJ sandwiches (...no comment)."},
        bridesmaids: { name: "Asia Davis", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Vince Wilson", image: "tux.svg",  bio:"If someone asked me who I would want to grow up to be like I would probably say Vince.  Two Degrees before 25, works at an Ivy League Univ., and lives the American dream.  Me and him go back to FAME back in high school and now have taken trips from Miami, New Orleans, to Mexico.  He always has a story just as long as Daphne doesn’t think he’s got a new best friend."},
        bridesmaids: { name: "Daphne Blakey", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      }
    ];

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
