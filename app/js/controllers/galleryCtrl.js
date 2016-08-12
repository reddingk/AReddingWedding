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
      {"id":0, "img":"t0.jpg" },
      {"id":1, "img":"t1.jpg" },
      {"id":2, "img":"t2.jpg" },
      {"id":3, "img":"t3.jpg" },
      {"id":4, "img":"t4.jpg" },
      {"id":5, "img":"t5.jpg" },
      {"id":6, "img":"t6.jpg" },
      {"id":7, "img":"t7.jpg" },
      {"id":8, "img":"t8.jpg" },
      {"id":9, "img":"t9.jpg" },
      {"id":10, "img":"t10.jpg" },
      {"id":11, "img":"t11.jpg" }
    ];

    vm.selecteditem = vm.items[0];
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
