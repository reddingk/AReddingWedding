(function(){
 "use strict";

  angular.module('eventsCtrl').controller('EventsController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.eventList = [
      {title: 'Engagement Party', date:new Date("2017-03-04 14:00:00"),
       location: {name: "Engagement Venue", address:"78910 Wallaby Lane, Washington DC, 20008" },
       photos: ["img/eventimgs/test1.jpg", "img/eventimgs/test2.jpg", "img/eventimgs/test3.jpg"]},
      {title: 'The Wedding', date:new Date("2018-05-18 14:00:00"),
       location: {name: "Church Venue", address:"11018 Guy R Brewer Blvd, Jamaica, NY 11433" },
       photos: ["img/eventimgs/test4.jpg"]},
      {title: 'The Reception', date:new Date("2018-05-18 17:00:00"),
       location: {name: "Venue", address:"1234 Place Road, New York, NY 11433" },
       photos: ["img/eventimgs/test5.jpg", "img/eventimgs/test6.jpg", "img/eventimgs/test7.jpg"]}
    ];

  }]);

})();
