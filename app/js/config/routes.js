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
      .state('app.quiz', {
        url: "quiz",
        views: {
          'content@': {
            templateUrl: 'views/funandgames.html',
            controller: 'FunAndGamesController as fc'
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
