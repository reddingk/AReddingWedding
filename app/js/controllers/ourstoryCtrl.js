(function(){
 "use strict";

  angular.module('ourStoryCtrl').controller('OurStoryController', ['$state', 'parallaxHelper', function($state, parallaxHelper){
    var vm = this;
    /*Functions*/
    vm.getEmbededURL = getEmbededURL;
    /*Variables*/
    vm.background = parallaxHelper.createAnimator(-0.3, 150, -150);

    vm.story = [
    {/*0*/
      left: { type: 'img', img: 'img/gallery/engagement/UD7.jpg' },
      right: {
        type:'content',
        perspective:'grace',
        title:'When I First Saw Him',
        when:'Summer 2007',
        content:'I first saw Kris during this UD summer program that allowed incoming freshman to get a headstart on their academics. During the first week of the program all the guys decided to go to the basketball courts behind the dorms and play a pick up game. My girls and I were just hanging out and decided to go watch the game. It’s safe to say it was Love at first site (or maybe it’s because he was playing without  a shirt on). My eyes were on Kris the whole game, I told my girls that I thought he was cute and they agreed, and also agreed that we would make a cute couple, the rest is history.'
      }
    },
    {/*1*/
      left: { type: 'img', img: 'img/gallery/engagement/CT3.jpg' },
      right: {
        type:'content',
        perspective:'kris',
        title:'First Date',
        when:'Summer 2007',
        content:'At this point we had known each other a few weeks so I decided to ask her out.  It was a nice day so we decided to go to the Trabant student center since it was a nice little walk from the dorms.  So we were talking, exchanging stories, joking, etc. and I like to consider myself a funny person so as we’re eating I decide to tell a joke (what it was I don’t remember).  I didn’t notice she had just taking a big sip of her soda.  So I tell my joke look up and all I see is soda being spewed in my face as she laughed.  When I wiped my face and opened my eyes I couldn’t help laugh at the embarrassed and scared look on her face.  Not gonna lie I didn’t imagine I was going to eventually marry her.'
      }
    },
    {/*2*/
      left: { type: 'img', img: 'img/gallery/engagement/CT7.jpg' },
      right: {
        type:'content',
        perspective:'grace',
        title:'Giving Each Other Space',
        when:'',
        content:'So after dating all of freshman year, Kris and I realized that being in a relationship right at the start of college never gave us a chance to date other people and find out  who we really are as growing adults. I mean since I had more wisdom (lol) I knew that there was no one else I wanted to date but I eventually agreed with him that this separation would only make our relationship stronger. I thought if we came back to each other then we were meant to be.'
      }
    },
    {/*3*/
      left: { type: 'img', img: 'img/gallery/engagement/CT12.jpg' },
      right: {
        type:'content',
        perspective:'kris',
        title:'Getting Back Together & Long Distance Relationship',
        when:'',
        content:'After about 2 years of going through the struggles of college I came to my senses and realized she has been my best friends and there for me when it counted.  With that being said we decided that we should give dating another run this time knowing each other a little better.  Seeing that we were now reaching the end of our time at UD we knew our next step would be a long distance relationship with me moving back to Maryland and Grace eventually going back to New York.  Lets just say if I could have gotten paid for the hours that I spent on 95 I could have probably payed for this whole wedding.'
      }
    },
    {/*4*/
      left: { type: 'img', img: 'img/gallery/engagement/UD1.jpg' },
      right: {
        type:'content',
        perspective:'grace',
        title:'Basement Hangouts & Moving to MD',
        when:'',
        content:'Every weekend that I had a chance to go visit Kris I took. It was a 5 hour drive to Kris, but somehow I tried my best to always beat my last time to get to him faster. Kris was living at home at this point and so once I got to his house we would chill in his parents basement, all weekend talking and joking all day and only leaving for food. Nothing was tying me to New York and at this time I was thinking of going back to school to become a registered Veterinary Technician. After thinking and praying I decided I should go to school in Maryland to move closer to Kris and pursue my next career step.'
      }
    },
    {/*5*/
      left: { type: 'title', title: 'The Proposal' },
      right: {
        type:'content',
        perspective:'kris',
        title:'The Set Up',
        when:'',
        content:'When people ask you, when you decided you wanted to propose I feel like they expect this elaborate story but for me I really woke up one day and decided I wanted to marry this girl.  I wanted her to be my wife so I had to make sure that I had an something big planned.  After enlisting the help of a few friends to help me pick out the ring and make sure her nails were done, I was ready for the proposal.'
      }
    },
    {/*6*/
      left: {
        type:'content',
        perspective:'grace',
        title:'The "Date"',
        when:'6.11.2016',
        content:'I woke up that Saturday morning in my apartment and started packing for our little weekend getaway in philadelphia. He wouldn’t tell me any details about where he was taking me but he did tell me I should look nice for our date that evening. After arriving at the hotel I got dressed and was ready to start my surprise evening. It started off at my favorite philadelphia restaurant, Warm Daddy’s. We were enjoying good food and music, and most of all enjoying each other’s company. After dinner Kris said he had to get a couple of things from the hotel room and then he said he was going to take me to the next surprise.'
      },
      right: {
        type:'content',
        perspective:'kris',
        title:'The Walk That Took Forever',
        when:'6.11.2016',
        content:'After the restaurant I told her that we were going to see her favorite play and it was a short walk from the hotel.  As we started walking I felt like time couldn’t be moving any faster but when we got a few yards for the rooftop restaurant I told her I had to blindfold her for this last part.  Seeing her face perplexed I knew I had pulled the surprise off.  With her eye’s covered I guided her up to the rooftop area of this restaurant for the moment of truth. '
      }
    },
    {/*7*/
      left: { type: 'img', img: 'img/gallery/engagement/CT6.jpg' },
      right: {
        type:'content',
        perspective:'grace',
        title:'When He Took Off The Blind Fold',
        when:'6.11.2016',
        content:'After I walked down the street blindfolded I had no idea where we were headed but I could tell I was outside somewhere. When Kris told me I could take off my blindfold the first people I saw were my parents, I was so excited to see them I didn’t even think of why they were there. I began to look around and realize everyone was there, so I began running around in excitement saying hi to everyone. Kris grabbed my hand and said, “before you say Hi to everyone I have something to ask you” he began telling me how much he loved me. Next thing I know he was getting down on one knee and pulling a ring box out of his bag, then asked me to marry him. I didn’t say yes, but I did say, \'who else would I spend the rest of my life with\''
      }
    },
    {/*8*/
      left: { type: 'title', title: 'She Said Yes!!!' },
      right: { type:'video', video: "https://www.youtube.com/watch?v=awMIbA34MT8" }
    }];

    var Page = (function() {

      var config = {
          $bookBlock : $( '#bb-bookblock' ),
          $navNext : $( '#bb-nav-next' ),
          $navPrev : $( '#bb-nav-prev' ),
          $navFirst : $( '#bb-nav-first' ),
          $navLast : $( '#bb-nav-last' )
        },
        init = function() {
          config.$bookBlock.bookblock( {
            speed : 1000,
            shadowSides : 0.8,
            shadowFlip : 0.4
          } );
          initEvents();
        },
        initEvents = function() {

          var $slides = config.$bookBlock.children();

          // add navigation events
          config.$navNext.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'next' );
            return false;
          } );

          config.$navPrev.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'prev' );
            return false;
          } );

          config.$navFirst.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'first' );
            return false;
          } );

          config.$navLast.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'last' );
            return false;
          } );

          // add swipe events
          $slides.on( {
            'swipeleft' : function( event ) {
              config.$bookBlock.bookblock( 'next' );
              return false;
            },
            'swiperight' : function( event ) {
              config.$bookBlock.bookblock( 'prev' );
              return false;
            }
          } );

          // add keyboard events
          $( document ).keydown( function(e) {
            var keyCode = e.keyCode || e.which,
              arrow = {
                left : 37,
                up : 38,
                right : 39,
                down : 40
              };

            switch (keyCode) {
              case arrow.left:
                config.$bookBlock.bookblock( 'prev' );
                break;
              case arrow.right:
                config.$bookBlock.bookblock( 'next' );
                break;
            }
          } );
        };

        return { init : init };
    })();


    // Functions
    function getEmbededURL(url) {
        var urlid = url.split("v=")[1];

        return "https://www.youtube.com/embed/" + urlid;
    }

    Page.init();
  }]);

})();
