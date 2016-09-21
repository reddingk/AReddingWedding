(function(){
 "use strict";

  angular.module('mainCtrl').controller('MainController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.checkActivePage = checkActivePage;
    vm.selectPage = selectPage;
    vm.togglePage = togglePage;

    /*Variables*/
    vm.selected = null;
    vm.cardClosed = true;
    vm.statetest = $state.current.name;

    /*Card Themes*/
    vm.cardThemes = [1,2,5,4];
    vm.selectedTheme = vm.cardThemes[Math.floor(Math.random() * 2)];

    function checkActivePage(current) {
         var currentPage = $state;
         if (currentPage != null && currentPage.current.name.indexOf(current) > -1) { return true; }
         else { return false; }
    }

    function selectPage(newstate) {
      if(!checkActivePage(newstate))
        $state.go(newstate);
    }

    function togglePage(newstate) {
      if(!checkActivePage(newstate)){
        if(!vm.cardClosed){
          vm.cardClosed = true;
        }

        setTimeout(function () {
          vm.cardClosed = false;
          selectPage(newstate);
        }, 1100);
      }
      else {
        vm.cardClosed = false;
      }
    }

  }]);

})();
