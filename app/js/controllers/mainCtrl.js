(function(){
 "use strict";

  angular.module('mainCtrl').controller('MainController', ['$state', function($state){
    var vm = this;
    /*Variables*/
    vm.selected = null;
    vm.cardClosed = true;
    vm.statetest = $state.current.name;
    vm.alertTemplate = "views/templates/_pageDirections.html";

    /*Card Themes*/
    vm.cardThemes = [1,2,5,4];
    vm.selectedTheme = vm.cardThemes[Math.floor(Math.random() * 2)];

    /*Functions*/
    vm.checkActivePage = checkActivePage;
    vm.selectPage = selectPage;
    vm.togglePage = togglePage;
    vm.toggleCard = toggleCard;
    vm.showDirections = showDirections;

    function showDirections() {
      if(!vm.cardClosed) {

      }
      return false;
    }

    function toggleCard(control){
      if(control == "open")
      { vm.cardClosed = false; }
      else if(control == "close")
      { vm.cardClosed = true; }
      else if(control == "toggle")
      { vm.cardClosed = !vm.cardClosed; }

      if(vm.cardClosed) {
        var navMain = $("#arw-inside-nav");
        navMain.collapse('hide');
      }
    }
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
