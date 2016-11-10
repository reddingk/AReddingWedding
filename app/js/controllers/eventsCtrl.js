(function(){
 "use strict";

  angular.module('eventsCtrl').controller('EventsController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.myInterval = 0;
    vm.active = 0;
    vm.eventsList = [
      {title: 'Engagement Party', date:new Date("2017-04-01 14:00:00"),
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nisi vel nibh dictum aliquam vitae et diam. Donec scelerisque nisl at ex faucibus dignissim. Sed ex sem, eleifend quis massa sit amet, bibendum volutpat lorem.",
       location: {name: "TBD", address:"TBD" },
       photos: [{id:0, image:"img/eventimgs/test1.jpg"}, {id:1, image:"img/eventimgs/test2.jpg"}, {id:2, image:"img/eventimgs/test3.jpg"}]},
      {title: 'The Wedding', date:new Date("2018-05-19 15:00:00"),
       text: "We will officially be jumping the broom at Grace's home church, Bethel Gospel Tabernacle.  All are welcome to our ceremony to watch us tie the knot and take as many pictures as possible.",
       location: {name: "Bethel Gospel Tabernacle", address:"11025 Guy R Brewer Blvd., Jamaica, NY 11433" },
       photos: [{id:0, image:"img/eventimgs/Church/C0.jpg"}],
       additionalinfo: []
     },
      {title: 'The Reception', date:new Date("2018-05-19 19:00:00"),
       text: "Our wedding reception will be hosted in the beautiful Fox Hollow, as much as we would love to have everyone there it is invitation only.  This elegant Long Island wedding venue is spread across a picturesque 8-acre estate, accented with lush gardens, lively waterfalls, and fountains.",
       location: {name: "The Fox Hollow", address:"7725 Jericho Turnpike, Woodbury, New York 11797" },
       photos: [{id:0, image:"img/eventimgs/Reception/fh0.jpg"}, {id:1, image:"img/eventimgs/Reception/fh1.jpg"}, {id:2, image:"img/eventimgs/Reception/fh2.jpg"}, {id:3, image:"img/eventimgs/Reception/fh3.jpg"}, {id:4, image:"img/eventimgs/Reception/fh4.jpg"}, {id:5, image:"img/eventimgs/Reception/fh5.jpg"}, {id:6, image:"img/eventimgs/Reception/fh6.jpg"}, {id:7, image:"img/eventimgs/Reception/fh7.jpg"}, {id:8, image:"img/eventimgs/Reception/fh8.jpg"}],
       additionalinfo:[{"type":"text", "content":"Located on the grounds of Fox Hollow is the Fox Hollow Boutique All-Suites Hotel.  We have blocked rooms for our guests at this hotel to help you fully enjoy this day with us."}, {"type":"text", "content":"To reserve your room:"},{"type":"text", "content":"Please call 516-921-1415 and mention that you are a guest of the Redding/Manning Wedding."}, {"type":"link", "content":"More Information", "url":"http://www.thefoxhollow.com/hotel.aspx"}]
     },
     {title: 'The Honeymoon', date:new Date("2018-05-22 12:00:00"),
      text: "The Honeymoon location, Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et felis non odio luctus suscipit. Donec eget pellentesque dui. Sed interdum facilisis magna in vehicula.",
      location: {name: "Kaua'i Marriott Resort", address:"3610 Rice St, Lihue, HI 96766" },
      photos: [{id:0, image:"img/eventimgs/test8.jpg"},{id:1, image:"img/eventimgs/test9.jpg"},{id:2, image:"img/eventimgs/test10.jpg"}],
      additionalinfo: []
    }
    ];

  }]);

})();
