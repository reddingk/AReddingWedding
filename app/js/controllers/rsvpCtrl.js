(function(){
 "use strict";

  angular.module('rsvpCtrl').controller('RSVPController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.CheckKey = CheckKey;
    vm.clearMsg = clearMsg;
    /*Variables*/
    vm.userkey = "";
    vm.rsvpKey = "ReddingWedding2018";
    vm.status = "";
    vm.errorMsg = false;

    /**/
    function CheckKey() {
      vm.errorMsg = false;
      if(vm.userkey.toLowerCase() == vm.rsvpKey.toLowerCase())
      { vm.status = "UNLOCKED";   }
      else
      {
        vm.errorMsg = true;
        vm.status = "LOCKED";
      }
    }
    function clearMsg(){
      vm.errorMsg = false;
    }

  }]);

})();
