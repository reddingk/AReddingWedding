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
        title: "Thru The Years",
        images: [{"id":0, "img":"college/t0.jpg", "title":"" },
        {"id":1, "img":"college/t1.jpg", "title":"" },
        {"id":2, "img":"college/t2.jpg", "title":"" },
        {"id":3, "img":"college/t3.jpg", "title":"" },
        {"id":4, "img":"college/t4.jpg", "title":"" },
        {"id":5, "img":"college/t5.jpg", "title":"" },
        {"id":6, "img":"college/t6.jpg", "title":"" },
        {"id":7, "img":"college/t7.jpg", "title":"" },
        {"id":8, "img":"college/t8.jpg", "title":"" },
        {"id":9, "img":"college/t9.jpg", "title":"" },
        {"id":10, "img":"college/t10.jpg", "title":"" },
        {"id":11, "img":"college/t11.jpg", "title":"" },
        {"id":12, "img":"college/t12.jpg", "title":"" },
        {"id":13, "img":"college/t13.jpg", "title":"" },
        {"id":14, "img":"college/t14.jpg", "title":"" },
        {"id":15, "img":"college/t15.jpg", "title":"" },
        {"id":16, "img":"college/t16.jpg", "title":"" },
        {"id":17, "img":"college/t17.jpg", "title":"" },
        {"id":18, "img":"college/t18.jpg", "title":"" },
        {"id":19, "img":"college/t19.jpg", "title":"" }]
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
