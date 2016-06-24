(function () {
	"use strict";

		angular.module('directives', []);
		angular.module('headerCtrl', ['ui.bootstrap']);
		/**/
    angular.module('ARWApp', ['ngMaterial','ngAnimate', 'ui.router', 'config', 'directives', 'headerCtrl']);

})();
