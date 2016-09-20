(function(){
 "use strict";

  angular.module('galleryCtrl').controller('GalleryController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.isSelected = isSelected;
    vm.changeSelected = changeSelected;

    /*Variables*/
    vm.items = [
      {"id":0, "img":"t0.jpg", "title":"" },
      {"id":1, "img":"t1.jpg", "title":"" },
      {"id":2, "img":"t2.jpg", "title":"" },
      {"id":3, "img":"t3.jpg", "title":"" },
      {"id":4, "img":"t4.jpg", "title":"" },
      {"id":5, "img":"t5.jpg", "title":"" },
      {"id":6, "img":"t6.jpg", "title":"" },
      {"id":7, "img":"t7.jpg", "title":"" },
      {"id":8, "img":"t8.jpg", "title":"" },
      {"id":9, "img":"t9.jpg", "title":"" },
      {"id":10, "img":"t10.jpg", "title":"" },
      {"id":11, "img":"t11.jpg", "title":"" }
    ];

    vm.selectedid = vm.items[0].id;


    function isSelected(id)
    {
      return (id == vm.selectedid ? "selected" : "");
    }

    function changeSelected(item)
    {
      vm.selectedid = item.id;
    }
  }]);

})();
