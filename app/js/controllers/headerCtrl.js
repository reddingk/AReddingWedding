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
      {"id":0, "name":"ourstory", "title":"Our Story", "state":"app.ourstory", "icon":"fa-gratipay" },
      {"id":1, "name":"construction", "title":"Wedding Party", "state":"app.construction", "icon":"fa-users" },
      {"id":2, "name":"construction", "title":"Events", "state":"app.construction", "icon":"fa-bell-o"},
      {"id":3, "name":"construction", "title":"RSVP", "state":"app.construction", "icon":"fa-envelope-o"},
      {"id":4, "name":"construction", "title":"Registry", "state":"app.construction", "icon":"fa-gift" },
      {"id":5, "name":"construction", "title":"Gallery", "state":"app.construction", "icon":"fa-camera-retro"}
    ];

    function checkActivePage(current) {
         var currentPage = $state;
         if (currentPage != null && currentPage.current.name.indexOf(current) > -1) { return true; }
         else { return false; }
    }

    function selectPage(newstate) {
      $state.go(newstate.link);
    }

  }]);

})();
