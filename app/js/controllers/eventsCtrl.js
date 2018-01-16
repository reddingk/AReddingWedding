(function(){
 "use strict";

  angular.module('eventsCtrl').controller('EventsController', ['$state', 'jInfo', function($state, jInfo){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.myInterval = 0;
    vm.active = 0;
    
    function getEventData(){
      jInfo.events(function(data){
        vm.eventsList = eventDateCheck(data);
      });
    }

    function eventDateCheck(eventList) {
      var events = {"past":[], "active":[]};
      var d = new Date();
      d.setDate(d.getDate() + 1);
      

      for(var i =0; i < eventList.length; i++){
        if(new Date(eventList[i].date) < d){
          events.past.push(eventList[i]);
        }
        else {
          events.active.push(eventList[i]);
        }
      }

      return events;
    }
    // Initial Page Load
    getEventData();

  }]);

})();
