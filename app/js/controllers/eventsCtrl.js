(function(){
 "use strict";

  angular.module('eventsCtrl').controller('EventsController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.myInterval = 0;
    vm.active = 0;
    vm.eventsList = [
      {title: 'Engagement Party', date:null,
       invite:true,
       text: "To kick off our wedding events we will be having our engagement party at Barcocina Resturant which is located off the water in Baltimore's Fells Point.  As much as we would love to have all of our friends and family there we will be sending out our invitations for this event.",
       location: {name: "Barcocina", address:"1629 Thames St, Baltimore, MD 21231" },
       photos: [{id:0, image:"img/eventimgs/Engagement/b1.JPG"}, {id:1, image:"img/eventimgs/Engagement/b2.JPG"}, {id:2, image:"img/eventimgs/Engagement/b3.JPG"}]},
      {title: 'The Wedding', date:new Date("2018-05-19 15:00:00"),
       invite:false,
       text: "We will officially be jumping the broom at Grace's home church, Bethel Gospel Tabernacle.  All are welcome to our ceremony to watch us tie the knot and take as many pictures as possible.",
       location: {name: "Bethel Gospel Tabernacle", address:"11025 Guy R Brewer Blvd., Jamaica, NY 11433" },
       photos: [{id:0, image:"img/eventimgs/Church/C0.jpg"}],
       additionalinfo: []
     },
      {title: 'The Reception', date:new Date("2018-05-19 19:00:00"),
       invite:true,
       text: "Our wedding reception will be hosted in the beautiful Fox Hollow, as much as we would love to have everyone there it is invitation only.  This elegant Long Island wedding venue is spread across a picturesque 8-acre estate, accented with lush gardens, lively waterfalls, and fountains.",
       location: {name: "The Fox Hollow", address:"7725 Jericho Turnpike, Woodbury, New York 11797" },
       photos: [{id:0, image:"img/eventimgs/Reception/fh0.jpg"}, {id:1, image:"img/eventimgs/Reception/fh1.jpg"}, {id:2, image:"img/eventimgs/Reception/fh2.jpg"}, {id:3, image:"img/eventimgs/Reception/fh3.jpg"}, {id:4, image:"img/eventimgs/Reception/fh4.jpg"}, {id:5, image:"img/eventimgs/Reception/fh5.jpg"}, {id:6, image:"img/eventimgs/Reception/fh6.jpg"}, {id:7, image:"img/eventimgs/Reception/fh7.jpg"}, {id:8, image:"img/eventimgs/Reception/fh8.jpg"}],
       additionalinfo:[{"type":"text", "content":"Located on the grounds of Fox Hollow is the Fox Hollow Boutique All-Suites Hotel.  We have blocked rooms for our guests at this hotel to help you fully enjoy this day with us."}, {"type":"text", "content":"To reserve your room:"},{"type":"text", "content":"Please call 516-921-1415 and mention that you are a guest of the Redding/Manning Wedding."}, {"type":"link", "content":"More Information", "url":"http://www.thefoxhollow.com/hotel.aspx"}]
     },
     {title: 'The Honeymoon', date:new Date("2018-05-22 12:00:00"),
      invite:false,
      text: "You can't go wrong with a honeymoon in Hawaii",
      location: {name: "Kaua'i Marriott Resort", address:"3610 Rice St, Lihue, HI 96766" },
      photos: [{id:0, image:"img/eventimgs/test8.jpg"},{id:1, image:"img/eventimgs/test9.jpg"},{id:2, image:"img/eventimgs/test10.jpg"}],
      additionalinfo: []
    }
    ];

  }]);

})();
