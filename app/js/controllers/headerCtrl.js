(function(){
 "use strict";

  angular.module('headerCtrl').controller('HeaderController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.checkActivePage = checkActivePage;
    vm.selectPage = selectPage;

    /*Variables*/
    vm.selected = null;

    vm.mainImg = "img/BrideAGroom.jpg"
    vm.pages = [
      {"id":0, "name":"ourstory", "title":"Our Story", "state":"app.ourstory", "icon":"fa-gratipay", "svg":"people.svg" },
      {"id":1, "name":"weddingparty", "title":"Wedding Party", "state":"app.weddingparty", "icon":"fa-users", "svg":"party-dancing.svg"},
      {"id":2, "name":"events", "title":"Events", "state":"app.events", "icon":"fa-bell-o", "svg":"party.svg"},
      {"id":3, "name":"rsvp", "title":"RSVP", "state":"app.rsvp", "icon":"fa-envelope-o", "svg":"letter.svg"},
      {"id":4, "name":"registry", "title":"Registry", "state":"app.registry", "icon":"fa-gift", "svg":"gifts.svg" },
      {"id":5, "name":"quiz", "title":"Quiz", "state":"app.quiz", "icon":"fa-camera-retro", "svg":"shapes.svg"},
      {"id":6, "name":"gallery", "title":"Gallery", "state":"app.gallery", "icon":"fa-camera-retro", "svg":"shapes.svg"}
    ];

    function checkActivePage(current) {
         var currentPage = $state;
         if (currentPage != null && currentPage.current.name.indexOf(current) > -1) { return true; }
         else { return false; }
    }

    function selectPage(newstate) {
      $state.go(newstate.link);
    }

    var navMain = $("#arwNavbar");
     navMain.on("click", ".link", null, function () {
         navMain.collapse('hide');
     });

  }]);

})();
