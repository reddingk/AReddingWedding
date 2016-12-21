(function(){
 "use strict";

  angular.module('eventsCtrl').controller('EventsController', ['$state', 'jInfo', function($state, jInfo){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.myInterval = 0;
    vm.active = 0;
    vm.eventsList = jInfo.events();

  }]);

})();
