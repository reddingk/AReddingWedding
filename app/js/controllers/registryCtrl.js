(function(){
 "use strict";

  angular.module('registryCtrl').controller('RegistryController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.selected = null;

    vm.items = [
      {"id":0, "name":"AMAZON", "url":"https://www.amazon.com/", "img":"amazon-logo.png" },
      {"id":1, "name":"NEWLYWISH", "url":"https://www.newlywish.com/", "img":"newlywish.png"},
      {"id":2, "name":"BED, BATH & BEYOND", "url":"http://www.bedbathandbeyond.com/", "img":"BedBathBeyond-Logo.png"}
    ];

  }]);

})();
