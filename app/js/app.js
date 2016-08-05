
(function () {
	"use strict";

		angular.module('directives', []);
		angular.module('mainCtrl', ['ui.bootstrap']);
		angular.module('headerCtrl', ['ui.bootstrap']);
		angular.module('ourStoryCtrl', ['ui.bootstrap']);
		angular.module('eventsCtrl', ['ui.bootstrap']);
		/**/
    angular.module('ARWApp', ['ngMaterial','ngAnimate', 'ui.router', 'angular-timeline', 'duParallax', 'config', 'directives', 'mainCtrl', 'headerCtrl', 'ourStoryCtrl', 'eventsCtrl']);

})();
