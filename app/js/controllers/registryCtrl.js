(function(){
 "use strict";

  angular.module('registryCtrl').controller('RegistryController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.selected = null;

    //vm.items = [];
    vm.items = [
      {"id":0, "name":"BED, BATH & BEYOND", "url":"https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=544091480&eventType=Wedding&pwsurl=", "img":"BedBathBeyond-Logo.png"},
      {"id":1, "name":"TARGET", "url":"http://www.target.com/gift-registry/registry/5e783267ee05492d85e307054cae10dc?ref=registryCopiedLink", "img":"Target-logo.png" },
      {"id":2, "name":"WAYFAIR", "url":"https://www.wayfair.com/registry/wedding/5e5c3220-a323-4165-8aaa-e2c7493eaec1", "img":"Wayfair-logo.png" }
    ];

  }]);

})();
