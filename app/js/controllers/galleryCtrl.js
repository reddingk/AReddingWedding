(function(){
 "use strict";

  angular.module('galleryCtrl').controller('GalleryController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.isSelected = isSelected;
    vm.changeSelected = changeSelected;
    vm.changeGallery = changeGallery;
    vm.navSelected = navSelected;    

    /*Variables*/
    vm.items = [{
        title: "College Years",
        images: [{"id":0, "img":"test/t0.jpg", "title":"" },
        {"id":1, "img":"test/t1.jpg", "title":"" },
        {"id":2, "img":"test/t2.jpg", "title":"" },
        {"id":3, "img":"test/t3.jpg", "title":"" },
        {"id":4, "img":"test/t4.jpg", "title":"" },
        {"id":5, "img":"test/t5.jpg", "title":"" },
        {"id":6, "img":"test/t6.jpg", "title":"" },
        {"id":7, "img":"test/t7.jpg", "title":"" },
        {"id":8, "img":"test/t8.jpg", "title":"" },
        {"id":9, "img":"test/t9.jpg", "title":"" },
        {"id":10, "img":"test/t10.jpg", "title":"" },
        {"id":11, "img":"test/t11.jpg", "title":"" }]
      },
      {
        title: "Engagement Photos",
        images: [{"id":0, "img":"test2/t0.jpg", "title":"" },
        {"id":1, "img":"test2/t1.jpg", "title":"" },
        {"id":2, "img":"test2/t2.jpg", "title":"" },
        {"id":3, "img":"test2/t3.jpg", "title":"" },
        {"id":4, "img":"test2/t4.jpg", "title":"" },
        {"id":5, "img":"test2/t5.jpg", "title":"" },
        {"id":6, "img":"test2/t6.jpg", "title":"" },
        {"id":7, "img":"test2/t7.jpg", "title":"" },
        {"id":8, "img":"test2/t8.jpg", "title":"" },
        {"id":9, "img":"test2/t9.jpg", "title":"" },
        {"id":10, "img":"test2/t10.jpg", "title":"" },
        {"id":11, "img":"test2/t11.jpg", "title":"" },
        {"id":12, "img":"test2/t12.jpg", "title":"" },
        {"id":13, "img":"test2/t13.jpg", "title":"" },
        {"id":14, "img":"test2/t14.jpg", "title":"" }]
      }];

    vm.displayItems = vm.items[0].images;
    vm.selectedid = vm.displayItems[0].id;


    function isSelected(id)
    {
      return (id == vm.selectedid ? "selected" : "");
    }

    function changeSelected(item)
    {
      vm.selectedid = item.id;
    }
    function navSelected(item) {
      return (item.images == vm.displayItems ? "selected" : "");
    }
    function changeGallery(item){
      if(navSelected(item) == ""){
        vm.selectedid = 0;
        vm.displayItems = item.images;
      }
    }
  }]);

})();
