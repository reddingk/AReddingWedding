
(function () {
	"use strict";

		angular.module('directives', []);
		angular.module('mainCtrl', ['ui.bootstrap']);
		angular.module('headerCtrl', ['ui.bootstrap']);
		/**/
    angular.module('ARWApp', ['ngMaterial','ngAnimate', 'ui.router', 'config', 'directives', 'mainCtrl', 'headerCtrl']);

})();
