(function(){
 "use strict";

  angular.module('galleryCtrl').controller('GalleryController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.switchItem = switchItem;
    vm.nextItem = nextItem;
    vm.prevItem = prevItem;
    vm.getSlides = getSlideLocation;

    /*Variables*/
    vm.items = [
      {"id":0, "img":"t0.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p"},
      {"id":1, "img":"t1.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":2, "img":"t2.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":3, "img":"t3.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":4, "img":"t4.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":5, "img":"t5.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":6, "img":"t6.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":7, "img":"t7.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":8, "img":"t8.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":9, "img":"t9.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":10, "img":"t10.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" },
      {"id":11, "img":"t11.jpg", "description":"This is a test description, to make sure it is working the real one will have relevant content. :p" }
    ];

    vm.selecteditem = vm.items[0];
    vm.displayitems = vm.items.slice(1, vm.items.length);
    vm.photoslides = [];

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
    /**/
    function getSlideLocation(){
      var x, y, angle, trans;
      //var selected = vm.selecteditem.id;
      for(var i =0; i < vm.items.length; i++) {
        x = Math.floor(Math.random() * 1501) - 500;
        y = Math.floor(Math.random() * 601) - 200;
        angle = Math.floor(Math.random() * 80) - 40 ;

        //trans = "{'transform': translate("+x+"px,"+ y+"px) rotate("+ angle + "deg)}";
        trans = {"transform": "translate("+x+"px, "+ y+"px)"+ "rotate("+angle + "deg)"};

        var photoitem = vm.items[i];
        photoitem.translate = 'translate(' +x+'px,'+y+'px)';
        photoitem.rotate = 'rotate('+angle+'deg)'
        photoitem.location = trans;
        vm.photoslides.push(photoitem);

      }
    }
    getSlideLocation();
  }]);

})();
