(function(){
 "use strict";

  angular.module('ourStoryCtrl').controller('OurStoryController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.events = [{
      badgeClass: 'kColor', side: 'left',
      badgeIconClass: 'fa-heart',
      title: 'Kris',
      when:"Fall 2007",
      content: 'First Met'
    }, {
      badgeClass: 'gColor', side:'right',
      badgeIconClass: 'fa-heart',
      title: 'Grace',
      when:"Fall 2007",
      content: 'First Met'
    },
    {
      imagebreak: 'true',
      badgeClass: 'centerimg', side:'',
      badgeIconClass: 'movin-image', content: 'img/storyimgs/test1.jpg'
    },
    {
      badgeClass: 'kColor', side: 'left',
      badgeIconClass: 'fa-heart',
      title: 'First Date',
      when:"2007",
      content: 'First Met'
    }, {
      badgeClass: 'gColor', side:'right',
      badgeIconClass: 'fa-heart',
      title: 'Grace',
      when:"Birthday Gift",
      content: 'First Met'
    }];

    /*Variables*/



  }]);

})();
