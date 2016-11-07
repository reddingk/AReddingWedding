
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
