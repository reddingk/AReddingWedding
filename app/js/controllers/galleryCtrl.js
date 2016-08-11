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
      {"id":0, "img":"amazon-logo.png" },
      {"id":1, "img":"amazon-logo.png" },
      {"id":2, "img":"amazon-logo.png" },
      {"id":3, "img":"amazon-logo.png" },
      {"id":4, "img":"amazon-logo.png" },
      {"id":5, "img":"amazon-logo.png" },
      {"id":6, "img":"amazon-logo.png" },
      {"id":7, "img":"amazon-logo.png" },
      {"id":8, "img":"amazon-logo.png" },
      {"id":9, "img":"amazon-logo.png" },
      {"id":10, "img":"amazon-logo.png" },
      {"id":11, "img":"amazon-logo.png" }
    ];

    vm.selecteditem = vm.items[0];
    vm.transitionitem = null;
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
