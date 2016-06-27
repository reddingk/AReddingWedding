
(function () {
	"use strict";

		angular.module('directives', []);
		angular.module('mainCtrl', ['ui.bootstrap']);
		angular.module('headerCtrl', ['ui.bootstrap']);
		/**/
    angular.module('ARWApp', ['ngMaterial','ngAnimate', 'ui.router', 'config', 'directives', 'mainCtrl', 'headerCtrl']);

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
      .state('app.construction', {
        url: "underconstruction",
        views: {
          'content@': {
            templateUrl: 'views/construction.html'
          }
        }
      })
      .state('app.ourstory', {
        url: "ourstory",
        views: {
          'content@': {
            templateUrl: 'views/ourstory.html'/*,
            controller: 'OurStoryController as oc'*/
          }
        }
      });

      $urlRouterProvider.otherwise('/');
      //$locationProvider.html5Mode(true);
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

    vm.pages = [
      {"id":0, "name":"ourstory", "title":"Our Story", "state":"app.ourstory", "icon":"fa-gratipay" },
      {"id":1, "name":"construction", "title":"Wedding Party", "state":"app.construction", "icon":"fa-users" },
      {"id":2, "name":"construction", "title":"Events", "state":"app.construction", "icon":"fa-bell-o"},
      {"id":3, "name":"construction", "title":"RSVP", "state":"app.construction", "icon":"fa-envelope-o"},
      {"id":4, "name":"construction", "title":"Registry", "state":"app.construction", "icon":"fa-gift" },
      {"id":5, "name":"construction", "title":"Gallery", "state":"app.construction", "icon":"fa-camera-retro"}
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
          console.log("CD1:" + vm.cardClosed);
          console.log("NS :" + newstate);
          selectPage(newstate);
        }, 1100);
      }
      else {
        vm.cardClosed = false;
      }
    }

  }]);

})();
