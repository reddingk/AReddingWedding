(function(){
 "use strict";

  angular.module('eventsCtrl').controller('EventsController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.myInterval = 7000;
    vm.active = 0;
    vm.eventsList = [
      {title: 'Engagement Party', date:new Date("2017-03-04 14:00:00"),
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nisi vel nibh dictum aliquam vitae et diam. Donec scelerisque nisl at ex faucibus dignissim. Sed ex sem, eleifend quis massa sit amet, bibendum volutpat lorem.",
       location: {name: "Engagement Venue", address:"78910 Wallaby Lane, Washington DC, 20008" },
       photos: [{id:0, image:"img/eventimgs/test1.jpg"}, {id:1, image:"img/eventimgs/test2.jpg"}, {id:2, image:"img/eventimgs/test3.jpg"}]},
      {title: 'The Wedding', date:new Date("2018-05-19 15:00:00"),
       text: "The church where the wedding ceremony will take place on April 6th is St. Patrick's Church, where you'll find us most Sunday mornings.",
       location: {name: "Church Venue", address:"11018 Guy R Brewer Blvd, Jamaica, NY 11433" },
       photos: [{id:0, image:"img/eventimgs/test4.jpg"}],
       additionalinfo: {}
     },
      {title: 'The Reception', date:new Date("2018-05-19 19:00:00"),
       text: "Maecenas porta orci nec pretium ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et felis non odio luctus suscipit. Donec eget pellentesque dui. Sed interdum facilisis magna in vehicula.",
       location: {name: "Venue", address:"1234 Place Road, New York, NY 11433" },
       photos: [{id:0, image:"img/eventimgs/test5.jpg"}, {id:1, image:"img/eventimgs/test6.jpg"}, {id:2, image:"img/eventimgs/test7.jpg"}],
       additionalinfo:{}
     },
     {title: 'The Honeymoon', date:new Date("2018-05-22 12:00:00"),
      text: "The Honeymoon location, Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et felis non odio luctus suscipit. Donec eget pellentesque dui. Sed interdum facilisis magna in vehicula.",
      location: {name: "Kaua'i Marriott Resort", address:"3610 Rice St, Lihue, HI 96766" },
      photos: [{id:0, image:"img/eventimgs/test8.jpg"},{id:1, image:"img/eventimgs/test9.jpg"},{id:2, image:"img/eventimgs/test10.jpg"}],
      additionalinfo: {}
    }
    ];

  }]);

})();
