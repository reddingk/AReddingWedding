(function(){
 "use strict";

  angular.module('registryCtrl').controller('RegistryController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.selected = null;

    //vm.items = [];
    vm.items = [
      {"id":0, "name":"TARGET", "url":"http://www.target.com/gift-registry/registry/939b9593b27d4ed8926a524b0ff0916d?ref=registryCopiedLink", "img":"Target-logo.png" },
      {"id":1, "name":"BED, BATH & BEYOND", "url":"https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=544091480&eventType=Wedding&pwsurl=", "img":"BedBathBeyond-Logo.png"}
    ];

  }]);

})();
