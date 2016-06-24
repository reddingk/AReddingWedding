(function(){
 "use strict";

  angular.module('headerCtrl').controller('HeaderController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.checkActivePage = checkActivePage;
    vm.selectPage = selectPage;

    /*Variables*/
    vm.selected = null;
    vm.pages = [
      {"id":0, "name":"construction", "state":"app.construction", "title":"1" },
      {"id":1, "name":"construction", "state":"app.construction", "title":"2" },
      {"id":2, "name":"construction", "state":"app.construction", "title":"3" },
      {"id":3, "name":"construction", "state":"app.construction", "title":"4" },
      {"id":4, "name":"construction", "state":"app.construction", "title":"5" },
      {"id":5, "name":"construction", "state":"app.construction", "title":"6" },
      {"id":6, "name":"construction", "state":"app.construction", "title":"7" }
    ]

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
