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
