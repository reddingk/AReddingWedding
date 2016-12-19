
(function () {
	"use strict";

		angular.module('dataconfig', []);
		angular.module('directives', []);
		angular.module('services', []);
		angular.module('mainCtrl', ['ui.bootstrap', 'ngAnimate']);
		angular.module('headerCtrl', ['ui.bootstrap', 'ngAnimate']);
		angular.module('ourStoryCtrl', ['ui.bootstrap']);
		angular.module('eventsCtrl', ['ui.bootstrap']);
		angular.module('weddingPartyCtrl',['ui.bootstrap']);
		angular.module('rsvpCtrl',['ui.bootstrap']);
		angular.module('registryCtrl',['ui.bootstrap']);
		angular.module('galleryCtrl',['ui.bootstrap', 'ngAnimate', 'ngMaterial']);
		angular.module('funandgamesCtrl',['ui.bootstrap', 'ngAnimate', 'ngMaterial']);
		/**/
    angular.module('ARWApp', ['ngMaterial', 'ngAnimate', 'ui.router', 'angular-timeline', 'duParallax', 'config', 'dataconfig', 'directives', 'services', 'mainCtrl', 'headerCtrl', 'ourStoryCtrl', 'eventsCtrl', 'weddingPartyCtrl','rsvpCtrl', 'registryCtrl', 'galleryCtrl', 'funandgamesCtrl']);

})();
