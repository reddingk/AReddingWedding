
(function () {
	"use strict";

		angular.module('dataconfig', []);
		angular.module('directives', []);
		angular.module('services', []);
		angular.module('mainCtrl', ['ui.bootstrap', 'ngAnimate']);
		angular.module('headerCtrl', ['ui.bootstrap', 'ngAnimate']);
		angular.module('ourStoryCtrl', ['ui.bootstrap']);
		angular.module('eventsCtrl', ['ui.bootstrap']);
		angular.module('weddingPartyCtrl',['ui.bootstrap']);
		angular.module('rsvpCtrl',['ui.bootstrap']);
		angular.module('registryCtrl',['ui.bootstrap']);
		angular.module('galleryCtrl',['ui.bootstrap', 'ngAnimate', 'ngMaterial']);
		angular.module('funandgamesCtrl',['ui.bootstrap', 'ngAnimate', 'ngMaterial']);
		/**/
    angular.module('ARWApp', ['ngMaterial', 'ngAnimate', 'ui.router', 'angular-timeline', 'duParallax', 'config', 'dataconfig', 'directives', 'services', 'mainCtrl', 'headerCtrl', 'ourStoryCtrl', 'eventsCtrl', 'weddingPartyCtrl','rsvpCtrl', 'registryCtrl', 'galleryCtrl', 'funandgamesCtrl']);

})();

(function(){
  'use strict';

  angular.module('config', [ 'ngMaterial' ]);

})();

(function(){
  'use strict';

  angular.module('dataconfig')
  .service('jInfo', ['jData', '$filter', 'questionService', 'scoreService', function JInfo(jData, $filter, questionService, scoreService){
    /* Variables */

    /* Full Service*/
    return {
      scores: {
        getAll: function(callback) {
          scoreService.getAllScores(function(res){
              callback(res.data);
          });
        },
        addScore: function(score, callback){
          scoreService.submitScore(score, function(res){
              callback(res.data);
          });
        }
      },
      questions:{
        all: function(callback){
          questionService.getAllQuestions(function(res){
              callback(res.data);
          });
        }
      },
      quizInfo:{
        set: {
          //setQuizInfo(name, score, reportCard)
          score:function(value){
            jData.setQuizInfo(null, value, null);
          },
          name: function(value) {
            jData.setQuizInfo(value, null, null);
          },
          reportCard: function(value){
            jData.setQuizInfo(null, null, value);
          }
        },
        get: {
          info:function(){
            return jData.quizInfo;
          }
        }

      },
      photos: {
        engagement:{
          type: function(photo_type){
            var returnPhotos = null;

            switch(photo_type){
              case "all":
                returnPhotos = [];
                returnPhotos.push(jData.engagement1_1);
                returnPhotos.push(jData.engagement1_2);
                returnPhotos.push(jData.engagement2);
                returnPhotos.push(jData.engagement3);
                break;
              case "CT1":
                returnPhotos = jData.engagement1_1;
                break;
              case "CT1_2":
                returnPhotos = jData.engagement1_2;
                break;
              case "CT2":
                returnPhotos = jData.engagement2;
                break;
              case "UD":
                returnPhotos = jData.engagement3;
                break;
              default:
                break;
            }
            return returnPhotos;
          },
          preload: function(set){
            var preloadList = [];
            switch(set){
              case "E1_1":
                preloadList = jData.engagement1_1.images;
                break;
              case "E1_2":
                preloadList = jData.engagement1_2.images;
                break;
              case "E2":
                preloadList = jData.engagement2.images;
                break;
              case "E3":
                preloadList = jData.engagement3.images;
                break;
              case "All":
                var e1 = jData.engagement1_1.images;
                var e1_2 = jData.engagement1_2.images;
                var e2 = jData.engagement2.images;
                var e3 = jData.engagement3.images;

                preloadList = e1.concat(e1_2);
                preloadList = preloadList.concat(e2).concat(e3);
                break;
              default:
                break;
            }

            return preloadList.map(x => 'img/gallery/'+x.img);
          }
        }
      },
      story: function(){
        return jData.ourStory;
      },
      party: function(type) {
        var partyPeople = null;
        switch(type){
          case "special":
            partyPeople = jData.partySpecial;
            break;
          case "regular":
            partyPeople = jData.partyRegular;
            break;
          default:
            break;
        }
        return partyPeople;
      },
      events: function() {
        return jData.events;
      }
    }
  }])
  .factory("jData", function(){
    function JInfoData(){
      var vm = this;

      vm.quizInfo = {"name": "", "score":-1, "reportCard":[]};

      vm.setQuizInfo = function(name, score, reportCard){
        if(name != null){
          vm.quizInfo.name = name;
        }
        if(score != null){
          vm.quizInfo.score = score;
        }
        if(reportCard != null){
          vm.quizInfo.reportCard = reportCard;
        }
      }


      vm.engagement1_1 = {
          title: "Engagement Photos - Outside City Tap House",
          credit: true,
          images: [{"id":0, "img":"engagement/CT1.jpg", "title":"Where He Proposed" },
          {"id":1, "img":"engagement/CT2.jpg", "title":"City Tap House" },
          {"id":2, "img":"engagement/CT3.jpg", "title":"City Tap House" },
          {"id":3, "img":"engagement/CT4.jpg", "title":"City Tap House" },
          {"id":4, "img":"engagement/CT5.jpg", "title":"City Tap House" },
          {"id":5, "img":"engagement/CT6.jpg", "title":"City Tap House" },
          {"id":6, "img":"engagement/CT7.jpg", "title":"City Tap House" },
          {"id":7, "img":"engagement/CT8.jpg", "title":"City Tap House" },
          {"id":8, "img":"engagement/CT9.jpg", "title":"City Tap House" },
          {"id":9, "img":"engagement/CT10.jpg", "title":"City Tap House" },
          {"id":10, "img":"engagement/CT11.jpg", "title":"City Tap House" },
          {"id":11, "img":"engagement/CT12.jpg", "title":"City Tap House" },
          {"id":12, "img":"engagement/CT13.jpg", "title":"City Tap House" },
          {"id":13, "img":"engagement/CT14.jpg", "title":"City Tap House" },
          {"id":14, "img":"engagement/CT15.jpg", "title":"City Tap House" },
          {"id":15, "img":"engagement/CT16.jpg", "title":"City Tap House" },
          {"id":16, "img":"engagement/CT17.jpg", "title":"City Tap House" },
          {"id":17, "img":"engagement/CT18.jpg", "title":"City Tap House" }]
        };
        vm.engagement1_2 = {
            title: "Engagement Photos - Inside City Tap House",
            credit: true,
            images: [{"id":0, "img":"engagement/CT19.jpg", "title":"City Tap House" },
            {"id":1, "img":"engagement/CT20.jpg", "title":"City Tap House" },
            {"id":2, "img":"engagement/CT21.jpg", "title":"City Tap House" },
            {"id":3, "img":"engagement/CT22.jpg", "title":"City Tap House" },
            {"id":4, "img":"engagement/CT23.jpg", "title":"City Tap House" },
            {"id":5, "img":"engagement/CT24.jpg", "title":"City Tap House" },
            {"id":6, "img":"engagement/CT25.jpg", "title":"City Tap House" },
            {"id":7, "img":"engagement/CT26.jpg", "title":"City Tap House" },
            {"id":8, "img":"engagement/CT27.jpg", "title":"City Tap House" },
            {"id":9, "img":"engagement/CT28.jpg", "title":"City Tap House" },
            {"id":10, "img":"engagement/CT30.jpg", "title":"City Tap House" },
            {"id":11, "img":"engagement/CT31.jpg", "title":"City Tap House" }]
          };

        vm.engagement2 = {
            title: "Engagement Photos - University of Delaware",
            credit: true,
            images: [{"id":0, "img":"engagement/UD1.jpg", "title":"Where It All Started" },
            {"id":1, "img":"engagement/UD2.jpg", "title":"Univ. of Delaware" },
            {"id":2, "img":"engagement/UD3.jpg", "title":"Univ. of Delaware" },
            {"id":3, "img":"engagement/UD4.jpg", "title":"Univ. of Delaware" },
            {"id":4, "img":"engagement/UD5.jpg", "title":"Univ. of Delaware" },
            {"id":5, "img":"engagement/UD6.jpg", "title":"Univ. of Delaware" },
            {"id":6, "img":"engagement/UD7.jpg", "title":"Univ. of Delaware" },
            {"id":7, "img":"engagement/UD8.jpg", "title":"Univ. of Delaware" },
            {"id":8, "img":"engagement/UD9.jpg", "title":"Univ. of Delaware" },
            {"id":9, "img":"engagement/UD10.jpg", "title":"Univ. of Delaware" },
            {"id":10, "img":"engagement/UD11.jpg", "title":"Univ. of Delaware" },
            {"id":11, "img":"engagement/UD12.jpg", "title":"Univ. of Delaware" },
            {"id":12, "img":"engagement/UD13.jpg", "title":"Univ. of Delaware" },
            {"id":13, "img":"engagement/UD14.jpg", "title":"Univ. of Delaware" },
            {"id":14, "img":"engagement/UD15.jpg", "title":"Univ. of Delaware" },
            {"id":15, "img":"engagement/UD16.jpg", "title":"Univ. of Delaware" }]
          };
        vm.engagement3 = {
            title: "Thru The Years",
            credit: false,
            images: [{"id":0, "img":"theyears/t4.jpg", "title":"UD Kab" },
            {"id":1, "img":"theyears/t0.jpg", "title":"New Years in NY" },
            {"id":2, "img":"theyears/t10.jpg", "title":"Proposal Night" },
            {"id":3, "img":"theyears/t14.jpg", "title":"Valentines Day Masquerade" },
            {"id":4, "img":"theyears/t5.jpg", "title":"Philly Nights" },
            {"id":5, "img":"theyears/t8.jpg", "title":"Marty Mcfly & His Minion" },
            {"id":6, "img":"theyears/t7.jpg", "title":"Masquerade fun" },
            {"id":7, "img":"theyears/t15.jpg", "title":"Grace's 25th" },
            {"id":8, "img":"theyears/t18.jpg", "title":"Dave and Buster Shenanigans" },
            {"id":9, "img":"theyears/t19.jpg", "title":"Kris's 25th" },
            {"id":10, "img":"theyears/t3.jpg", "title":"2010 'Kab'" },
            {"id":11, "img":"theyears/t1.jpg", "title":"Thanksgiving 2016" },
            {"id":12, "img":"theyears/t12.jpg", "title":"Parasailing" },
            {"id":13, "img":"theyears/t13.jpg", "title":"Grace's 21st" },
            {"id":14, "img":"theyears/t6.jpg", "title":"Photobombers" },
            {"id":15, "img":"theyears/t9.jpg", "title":"Cheeeesssee Cake" },
            {"id":16, "img":"theyears/t2.jpg", "title":"Summer days in '11'" },
            {"id":17, "img":"theyears/t17.jpg", "title":"Day Festival out in DE" },
            {"id":18, "img":"theyears/t20.jpg", "title":"Grace's 18th... yikes" }]
          };
          /*Our Story*/
          vm.ourStory = [
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

          /*Wedding Party List*/
          vm.partySpecial = { groomsman: { name: "Jason Pena", image: "suit-on-hanger.svg",  bio:"Mr. Pena the old man of the group my former roommate and one of my truest friends.  He currently lives out in Boston, MA, even  though i’m working on getting him to move to MD.  Despite this I talk to him more than anyone (other than Grace I guess) and our friendship is real.  With everything we have been through he had to be the one chosen to officially be my Best Man."},
                              bridesmaids: { name: "Naomi Manning", image:"dress-on-statue.svg", bio:"Naomi Manning is my older sister and best friend. She lives in Los Angeles, California soaking up the sun and working hard. Since I understood the concept of marriage I knew she was going to be standing right next to me on my special day. "}
                            };
          vm.partyRegular = [
            { groomsman: { name: "Kamron Redding", image: "tux.svg",  bio:"The middle of the three Redding boys and our family chaplin.  He lives in Germantown, Md but the two of us have grown up together in more states than I care to count.  I have watch him grow into a great person from working as a registered Nurse at the Washington Hospital Center, becoming a brother of Alpha Phi Alpha Fraternity inc., to starting a non-profit to feed the homeless ‘1ReddBag’."},
              bridesmaids: { name: "Nicole Manning", image:"bride-dress.svg" ,bio:"Nicole Manning is the oldest sister and has shared so much wisdom with me. She lives in Brooklyn, New York and has a creative spirit. She’s the best older sister a girl can ask for and I couldn’t imagine getting married without her there."}
            },
            { groomsman: { name: "Ayi Mensah", image: "tux.svg",  bio:"Ayi was one of the people I grew up with in Maryland from middle school to high school football.  Despite getting his degree and working as a personal trainer I think I have influenced him to join the technical world as he works to become a certified Database Administrator. Even tho he is a Golden State Fan I can consider him one of my closest friends and a person that was a lock to be one of my groomsman."},
              bridesmaids: { name: "Jackie Stevens", image:"bride-dress.svg" ,bio:"Jackie Stevens is my fellow New Yorker and great friend. She lives in Harlem, New York and makes the best cupcakes I know. I can’t wait to share more memories with her on my big day."}
            },
            { groomsman: { name: "Dwayne Washington", image: "tux.svg",  bio:"If you know me you know I have moved a lot in my life, This man hands down has known me longer than any non family member.  Due to our longevity of a friendship I have seen him grow from a little knuckleheads to having his own productions group, also putting together the proposal video for us.  Despite the fact he sometimes gets on my last nerves he’s one of my best friends. "},
              bridesmaids: { name: "Ashley Allyn", image:"bride-dress.svg", bio:"Ashley Alleyne is my fellow UDGC (university of Delaware gospel choir) alumni. She lives in Philadelphia, PA and is always down for my crazy ideas. She is going to make my day even more special. "}
            },
            { groomsman: { name: "Greg Parker", image: "tux.svg",  bio:"Mr. Parker aka the Father of my Goddaughter she’s going to be very taken care of as she grows up. I feel like I have known this guy longer than I probably have this may because I have more stories with this guy then anybody I know. He possibly the only person on the list i’ll admit might have a better jump shot than me.  One of those people that is family without being family."},
              bridesmaids: { name: "Nina Dawson", image:"bride-dress.svg" ,bio:"Nina Dawson is my friend who truly understands my love for animals. She lives in Newark, Delaware and always gives me sound advice. I’m grateful to have a bridesmaid like her on my special day."}
            },
            { groomsman: { name: "Andre Valines", image: "tux.svg",  bio:"I met this guy at University of Delaware shooting some b-ball outside of the school and we have been close almost instantly. I call him my UD son (even tho he hates it) but despite his age he is one of the people I look up too.  From working with the youth to becoming a prominent Legalshield associate i’ve already seen him do great things."},
              bridesmaids: { name: "Kaila Suarez", image:"bride-dress.svg" ,bio:"Kaila Suarez is the puerto rican princess, who likes things her way. She has a warm and giving heart and we can always have a good conversation. She works hard at everything including at her friendships. I’m happy she decided to be my bridesmaid."}
            },
            { groomsman: { name: "Khalin Redding", image: "tux.svg",  bio:"The youngest of the Redding boys, I truly can remember thinking we were going to take him back to the hospital one day.  He has really grown up watching him finish his engineering degree at Howard University now I feel like the odd one out not going to an HBCU.  He is definitely a person you don’t get into a debate with because you won’t win."},
              bridesmaids: { name: "Dominique Bridges", image:"bride-dress.svg" ,bio:"Dominique Bridges was one of my first friends in college, we clicked instantly based off the fact we had so many things in common. She will go out her way for her friends to support them and help them with whatever, so I know she’ll be there on my big day."}
            },
            { groomsman: { name: "Marquis Waters", image: "tux.svg",  bio:"If you don’t know him you need too he brings life to any event.  I have had the opportunity to be apart of the story called ‘The life of Quis’.  From spades nights around the campus of University of Delaware, to watching him becoming a brother of Phi Beta Sigma Fraternity Inc., graduating with a major in African American Studies, to becoming a part of the U.S. Air Force.  With all of that I’m glad he could be there with me on my day."},
              bridesmaids: { name: "Asia Davis", image:"bride-dress.svg" ,bio:"Asia Davis met near the end of my college career but we clicked right away. We always have a good time when we get together. She’s the friend that makes things happen and the one always planning our friend vacations. I feel blessed to have a friend like her."}
            },
            { groomsman: { name: "Vince Wilson", image: "tux.svg",  bio:"If someone asked me who I would want to grow up to be like I would probably say Vince.  Two Degrees before 25, works at an Ivy League University, brother of Omega Psi Phi Fraternity Inc., and can out dress anyone you know.  Me and him go back to FAME back in high school and now have taken trips from Miami, New Orleans, to Mexico.  With all of these places he was one of the first people I wanted to add to my groomsman."},
              bridesmaids: { name: "Daphne Blakey", image:"bride-dress.svg" ,bio:"Daphne Blakey was my roommate 3 years in a row during college. During this time I came to realize what a great friend she was. She always hid her snacks when living in the dorms, but always shared with me. I can’t wait to share more memories with her."}
            }
          ];

          /*Events*/
          vm.events = [
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
             photos: [{id:0, image:"img/eventimgs/Reception/fh1.jpg"}, {id:1, image:"img/eventimgs/Reception/fh2.jpg"}, {id:2, image:"img/eventimgs/Reception/fh3.jpg"}, {id:3, image:"img/eventimgs/Reception/fh4.jpg"}, {id:4, image:"img/eventimgs/Reception/fh5.jpg"}, {id:5, image:"img/eventimgs/Reception/fh6.jpg"}, {id:6, image:"img/eventimgs/Reception/fh7.jpg"}, {id:7, image:"img/eventimgs/Reception/fh8.jpg"}],
             additionalinfo:[{"type":"text", "content":"Located on the grounds of Fox Hollow is the Fox Hollow Boutique All-Suites Hotel.  We have blocked rooms for our guests at this hotel to help you fully enjoy this day with us."}, {"type":"text", "content":"To reserve your room:"},{"type":"text", "content":"Please call 516-921-1415 and mention that you are a guest of the Manning/Redding Wedding."}, {"type":"link", "content":"More Information", "url":"http://www.thefoxhollow.com/hotel.aspx"}]
           },
           {title: 'The Honeymoon', date:new Date("2018-05-22 12:00:00"),
            invite:false,
            text: "You can't go wrong with a honeymoon in Hawaii",
            location: {name: "Kaua'i Marriott Resort", address:"3610 Rice St, Lihue, HI 96766" },
            photos: [{id:0, image:"img/eventimgs/test8.jpg"},{id:1, image:"img/eventimgs/test9.jpg"},{id:2, image:"img/eventimgs/test10.jpg"}],
            additionalinfo: []
          }
          ];
    }
    return new JInfoData();
  });

})();

(function(){

  angular
    .module('config')
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: {
          'content':{
            templateUrl: 'views/home.html'
          },
          'header':{
            templateUrl: 'views/templates/_header.html',
            controller: 'HeaderController as hdc'
          }
        }
      })
      .state('app.home', {
        url: "home",
        views: {
          'content@': {
            templateUrl: 'views/home.html'
          }
        }
      })
      .state('app.ourstory', {
        url: "ourstory",
        views: {
          'content@': {
            templateUrl: 'views/ourstory.html',
            controller: 'OurStoryController as oc'
          }
        }
      })
      .state('app.events', {
        url: "events",
        views: {
          'content@': {
            templateUrl: 'views/events.html',
            controller: 'EventsController as ec'
          }
        }
      })
      .state('app.weddingparty', {
        url: "weddingparty",
        views: {
          'content@': {
            templateUrl: 'views/weddingparty.html',
            controller: 'WeddingPartyController as wpc'
          }
        }
      })
      .state('app.rsvp', {
        url: "rsvp",
        views: {
          'content@': {
            templateUrl: 'views/rsvp.html',
            controller: 'RSVPController as rc'
          }
        }
      })
      .state('app.registry', {
        url: "registry",
        views: {
          'content@': {
            templateUrl: 'views/registry.html',
            controller: 'RegistryController as rgc'
          }
        }
      })
      .state('app.gallery', {
        url: "gallery",
        views: {
          'content@': {
            templateUrl: 'views/gallery.html',
            controller: 'GalleryController as gc'
          }
        }
      })
      .state('app.quiz', {
        url: "quiz",
        views: {
          'content@': {
            templateUrl: 'views/funandgames.html',
            controller: 'FunAndGamesController as fc'
          }
        }
      })
      .state('app.dev', {
        url: "dev",
        views: {
          'content@': {
            templateUrl: 'views/dev.html',
            controller: 'WeddingPartyController as wpc'
          }
        }
      })
      .state('app.construction', {
        url: "underconstruction",
        views: {
          'content@': {
            templateUrl: 'views/construction.html'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }]);


})();

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

(function(){
 "use strict";

  angular.module('funandgamesCtrl').controller('FunAndGamesController', ['$state', 'jInfo', function($state, jInfo){
    var vm = this;
    /*Variables*/
    vm.errorString = "";
    vm.displayError = false;
    vm.displayScore = false;
    vm.userName = "";
    vm.submitted = false;

    var topScoreMax = 10;

    var userinfo = jInfo.quizInfo.get.info();

    if(userinfo.score < 0) {
      jInfo.questions.all(function(results){
        vm.questions = results;
        vm.quiz = setUpReportCard(results);
      });
    }
    else {
      vm.quiz = setUpReportCard([]);
      vm.quiz.score = userinfo.score;
      vm.quiz.wrongQuestions = userinfo.reportCard;
      vm.displayScore = true;
      vm.submitted = (userinfo.name != "");

      jInfo.scores.getAll(function(res){
        var allResults = res.sort(function(a, b) {
            return parseFloat(b.score) - parseFloat(a.score) || new Date(b.date) - new Date(a.date);
        });
        vm.topScores = allResults.slice(0,topScoreMax);
      });
    }

    /*Functions*/

    function setUpReportCard(questions){
      // question = {"question":"", "answer":"", "display":"", "selected":""}
      var reportCard = {"questions":[], "score":0, "wrongQuestions":[]};

      for(var i =0; i < questions.length; i++){
        var x = Math.floor((Math.random() * 4) + 0);
        var displayArr = questions[i].answer.display;
        var displayList = displayArr.splice(x,0,questions[i].answer.final);

        var tmpQuestion = {"question":questions[i].question, "answer":questions[i].answer.final, "display":displayArr, "selected":""};

        reportCard.questions.push(tmpQuestion);
      }
      return reportCard;
    }

    vm.selectQuestionAnswer = function(question, answer){
      vm.displayError = false;
      question.selected = (question.selected == answer ? "" : answer);
    }
    vm.isSelectAnswer = function(question, answer){
      return (question.selected == answer ? "selected" : "");
    }

    vm.checkQuizAnswers = function(){
      vm.displayError = false;
      // check that all answers are filled
      var answerSheet = vm.quiz.questions;
      var emptyQuestions = [];
      var correctAnswers = 0;
      var wrongQuestions = [];
      for(var i=0; i < answerSheet.length; i++){
        if(answerSheet[i].selected == ""){
          emptyQuestions.push((i+1));
        }
        else if(answerSheet[i].selected == answerSheet[i].answer) {
          correctAnswers = correctAnswers + 1;
        }
        else {
          wrongQuestions.push({"question":answerSheet[i].question, "theirAnswer":answerSheet[i].selected, "rightAnswer": answerSheet[i].answer})
        }
      }

      if(emptyQuestions.length == 0){
        vm.quiz.score = (correctAnswers / answerSheet.length) * 100;
        vm.quiz.wrongQuestions = wrongQuestions;
        // Set User Info
        jInfo.quizInfo.set.score(vm.quiz.score);
        jInfo.quizInfo.set.reportCard(vm.quiz.wrongQuestions);

        vm.displayScore = true;
      }
      else {
        vm.errorString = "Please Answer Question" +(emptyQuestions.length > 1 ? "s" : "") + " [" + emptyQuestions.join()+"] And Resubmit.";
        vm.displayError = true;
      }
    }

    vm.showHighScores = function(direction) {

      // Display High Score
      if(direction == "toggle"){
        vm.showScore = !vm.showScore;
      }
      else {
        vm.showScore = (direction == "open" ? true : false);
      }
      jInfo.scores.getAll(function(res){
        var allResults = res.sort(function(a, b) {
            return parseFloat(b.score) - parseFloat(a.score) || new Date(b.date) - new Date(a.date);
        });
        vm.topScores = allResults.slice(0,topScoreMax);
      });
    }

    vm.submitScore = function(){
      vm.displayError = false;
      if(vm.userName.length > 0){
        jInfo.quizInfo.set.name(vm.userName);
        // submit score
        var submission = {name: vm.userName, score: vm.quiz.score, date: new Date(), wrongAnswers: vm.quiz.wrongQuestions};
        jInfo.scores.addScore(submission, function(results){
          vm.submitted = results.added;
          vm.showHighScores('open');
        });
      }
      else {
        vm.errorString = "Please Enter in your name first.";
        vm.displayError = true;
      }
    }

  }]);

})();

(function(){
 "use strict";

  angular.module('galleryCtrl').controller('GalleryController', ['$state', '$mdDialog', 'jInfo', 'preloader',function($state, $mdDialog, jInfo,preloader){
    var vm = this;
    /*Functions*/
    vm.isSelected = isSelected;
    vm.changeSelected = changeSelected;
    vm.changeGallery = changeGallery;
    vm.navSelected = navSelected;

    /*Variables*/
    vm.items = jInfo.photos.engagement.type("all");

    // Preload Gallery Images
    vm.preLoad = preloader.preloadImages( jInfo.photos.engagement.preload("E1_1") );

    vm.displayItems = vm.items[0].images;
    vm.displayCredit = true;
    vm.selectedid = vm.displayItems[0].id;
    var selectedImg = "";
    var selectedTitle = "";

    function isSelected(id) {
      return (id == vm.selectedid ? "selected" : "");
    }

    function changeSelected(item, ev, double) {
      if(double == true && (vm.selectedid == item.id)){
        // Open Dialog
        selectedImg = item.img;
        selectedTitle = item.title;
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/templates/_galleryPop.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: true
        });
      }
      else {
        vm.selectedid = item.id;
      }
    }
    function DialogController($scope, $mdDialog)
    {
      $scope.img = selectedImg;
      $scope.title = selectedTitle;
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }

    function navSelected(item) {
      return (item.images == vm.displayItems ? "selected" : "");
    }
    function changeGallery(item){
      if(navSelected(item) == ""){
        vm.selectedid = 0;
        vm.displayItems = item.images;
        vm.displayCredit = item.credit;
      }
    }
  }]);

})();

(function(){
 "use strict";

  angular.module('headerCtrl').controller('HeaderController', ['$state', 'jInfo', 'preloader',function($state, jInfo, preloader){
    var vm = this;
    /*Functions*/
    vm.checkActivePage = checkActivePage;
    vm.selectPage = selectPage;

    /*Variables*/
    vm.selected = null;

    vm.preLoad = preloader.preloadImages( ["img/background/image_left.min.svg","img/background/image_couple.min.svg","img/background/image_right.svg"/*, "img/test.svg"*/] );

    vm.mainImg = "img/BrideAGroom.jpg"
    vm.pages = [
      {"id":0, "name":"ourstory", "title":"Our Story", "state":"app.ourstory", "icon":"fa-gratipay", "svg":"people.svg" },
      {"id":1, "name":"weddingparty", "title":"Wedding Party", "state":"app.weddingparty", "icon":"fa-users", "svg":"party-dancing.svg"},
      {"id":2, "name":"events", "title":"Events", "state":"app.events", "icon":"fa-bell-o", "svg":"party.svg"},
      {"id":3, "name":"rsvp", "title":"RSVP", "state":"app.rsvp", "icon":"fa-envelope-o", "svg":"letter.svg"},
      {"id":4, "name":"registry", "title":"Registry", "state":"app.registry", "icon":"fa-gift", "svg":"gifts.svg" },
      {"id":5, "name":"quiz", "title":"Quiz", "state":"app.quiz", "icon":"fa-camera-retro", "svg":"shapes.svg"},
      {"id":6, "name":"gallery", "title":"Gallery", "state":"app.gallery", "icon":"fa-camera-retro", "svg":"shapes.svg"}
    ];

    function checkActivePage(current) {
         var currentPage = $state;
         if (currentPage != null && currentPage.current.name.indexOf(current) > -1) { return true; }
         else { return false; }
    }

    function selectPage(newstate) {
      $state.go(newstate.link);
    }

    var navMain = $("#arwNavbar");
     navMain.on("click", ".link", null, function () {
         navMain.collapse('hide');
     });

  }]);

})();

(function(){
 "use strict";

  angular.module('mainCtrl').controller('MainController', ['$state', '$window', function($state, $window){
    var vm = this;
    /*Variables*/
    vm.selected = null;
    vm.cardClosed = true;
    vm.statetest = $state.current.name;
    vm.alertTemplate = "views/templates/_pageDirections.html";
    vm.scrollPass = false;

    /*Card Themes*/
    vm.cardThemes = [1,2,5,4];
    vm.selectedTheme = vm.cardThemes[Math.floor(Math.random() * 2)];

    /*Functions*/
    vm.checkActivePage = checkActivePage;
    vm.selectPage = selectPage;
    vm.togglePage = togglePage;
    vm.toggleCard = toggleCard;
    vm.showDirections = showDirections;

    function showDirections() {      
      if(!vm.cardClosed) {
        return true;
      }
      return false;
    }

    function toggleCard(control){
      if(control == "open")
      { vm.cardClosed = false; }
      else if(control == "close")
      { vm.cardClosed = true; }
      else if(control == "toggle")
      { vm.cardClosed = !vm.cardClosed; }

      if(vm.cardClosed) {
        var navMain = $("#arw-inside-nav");
        navMain.collapse('hide');
      }
    }
    function checkActivePage(current) {
         var currentPage = $state;
         if (currentPage != null && currentPage.current.name.indexOf(current) > -1) { return true; }
         else { return false; }
    }

    function selectPage(newstate) {
      if(!checkActivePage(newstate))
        $state.go(newstate);
    }

    function togglePage(newstate) {
      if(!checkActivePage(newstate)){
        if(!vm.cardClosed){
          vm.cardClosed = true;
        }

        setTimeout(function () {
          vm.cardClosed = false;
          selectPage(newstate);
        }, 1100);
      }
      else {
        vm.cardClosed = false;
      }
    }

  }]);

})();

(function(){
 "use strict";

  angular.module('ourStoryCtrl').controller('OurStoryController', ['$state', 'parallaxHelper', 'jInfo', function($state, parallaxHelper, jInfo){
    var vm = this;
    /*Functions*/
    vm.getEmbededURL = getEmbededURL;
    /*Variables*/
    vm.background = parallaxHelper.createAnimator(-0.3, 150, -150);
    vm.story = jInfo.story();

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

(function(){
 "use strict";

  angular.module('registryCtrl').controller('RegistryController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.selected = null;

    vm.items = [];
    vm.items_demo = [
      {"id":0, "name":"AMAZON", "url":"https://www.amazon.com/", "img":"amazon-logo.png" },
      {"id":1, "name":"NEWLYWISH", "url":"https://www.newlywish.com/", "img":"newlywish.png"},
      {"id":2, "name":"BED, BATH & BEYOND", "url":"http://www.bedbathandbeyond.com/", "img":"BedBathBeyond-Logo.png"}
    ];

  }]);

})();

(function(){
 "use strict";

  angular.module('rsvpCtrl').controller('RSVPController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.CheckKey = CheckKey;
    vm.clearMsg = clearMsg;
    /*Variables*/
    vm.userkey = "";
    vm.rsvpKey = "ReddingWedding2018";
    vm.status = "";
    vm.errorMsg = false;

    /**/
    function CheckKey() {
      vm.errorMsg = false;
      if(vm.userkey.toLowerCase() == vm.rsvpKey.toLowerCase())
      { vm.status = "UNLOCKED";   }
      else
      {
        vm.errorMsg = true;
        vm.status = "LOCKED";
      }
    }
    function clearMsg(){
      vm.errorMsg = false;
    }

  }]);

})();

(function(){
 "use strict";

  angular.module('weddingPartyCtrl').controller('WeddingPartyController', ['$state', 'jInfo', function($state, jInfo){
    var vm = this;
    /*Functions*/
    vm.clickParty = clickParty;
    vm.isSelected = isSelected;

    /*Variables*/
    vm.selectedParty = null;
    vm.specialParty = jInfo.party("special");
    vm.partylist = jInfo.party("regular");

    /*Functions*/
    function clickParty(party){
      if(vm.selectedParty == party) {
        vm.selectedParty = null;
      }
      else {
        vm.selectedParty = party;
      }
    }
    function isSelected(party) {
      if(vm.selectedParty == party) {
        return true;
      }
      else {
        return false;
      }
    }

  }]);

})();

(function(){
   "use strict";

  angular.module('directives').directive('bookBlock', [function() {
     return {
     restrict:'AE',
     link: function(scope, element, attrs) {

         bookBlock =  element, // $(element).find("#bb-bookblock"),
         navNext = $(document).find('#bb-nav-next'),
         navPrev = $(document).find( '#bb-nav-prev'),

         bb = element.bookblock( {
             speed : 800,
             perspective : 2000,
             shadowSides : 0.8,
             shadowFlip  : 0.4,
             });

                 var slides = bookBlock.children();

                 // add navigation events
                 navNext.on( 'click touchstart', function() {
                     element.bookblock( 'next' );
                     return false;
                 } );

                 navPrev.on( 'click touchstart', function() {
                     element.bookblock( 'prev' );
                     return false;
                 } );

                 // add swipe events
                 slides.on( {
                     'swipeleft' : function( event ) {
                         bookBlock.bookblock( 'next' );
                         return false;
                     },
                     'swiperight' : function( event ) {
                         bookBlock.bookblock( 'prev' );
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
                             bookBlock.bookblock( 'prev' );
                             break;
                         case arrow.right:
                             bookBlock.bookblock( 'next' );
                             break;
                     }
                 } );
     }
   }
 }]);

})();

(function(){
   "use strict";

    angular.module('directives').directive('navHold', ['$window', function($window) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {

          angular.element($window).bind("scroll", function() {

            var topSection = angular.element(document.getElementsByClassName("nav-top"))[0];
            var windowp = angular.element($window)[0];

            var topThreshhold = (topSection.offsetTop + topSection.offsetHeight);
            //var topThreshhold = element[0].offsetTop - element[0].clientHeight;

            if(windowp.pageYOffset >= topThreshhold){
              if(!element.hasClass("screenPass")){
                element.addClass("screenPass");
              }
            }
            else {
              if(element.hasClass("screenPass")){
                element.removeClass("screenPass");
              }
            }

          });
        }
      }

    }]);

})();

(function(){
   "use strict";

    angular.module('directives').directive('photoMotion', ['$window', function() {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {

          var itemid = $scope.$eval(attrs.itemid);
          var itemcount = $scope.$eval(attrs.itemcount);
          var isNav = $scope.$eval(attrs.isnav);

          //-item position function
          function getItemLocation(locid, elemId){
            //-selected id
            var selectedid = (elemId == null ? $scope.$eval(attrs.selectedid) : elemId);

            // Get element by id
            var stackCont = angular.element(document).find('.stack-container');
            var elemMove = stackCont.children()[locid];
            var imgElem = elemMove.children[0].children[0];

            var pageWidth = window.innerWidth;
            var offsetX = ((imgElem.naturalWidth * ( pageWidth < 801 ? 170 : 320)) / imgElem.naturalHeight);
            var defaultX = Math.floor((stackCont[0].offsetWidth - offsetX)/2);
            var maxX = Math.floor(pageWidth * .86);

            var x =  Math.floor(Math.random() * maxX) - 200;
            var y = Math.floor(Math.random() * 501) - 200;
            var angle =  Math.floor(Math.random() * 80) - 40;

            // Check Out of Bounds
            x = (x < -50 ? -40 : x);
            y = (y < 30 ? 30 : y);



            elemMove.style.transform = (selectedid == locid ? "translate(-50%, -30%) rotate(0deg)" : "translate("+x+"px, "+ y+"px)"+ "rotate("+angle + "deg)");

          }

          // On click Set selected id
          element.bind('click', function() {
            if(itemid != $scope.$eval(attrs.selectedid)){
              for(var i=0; i < itemcount; i++)
              {
                getItemLocation(i, itemid);
              }
            }
          });
          // Intitial Object Set
          getItemLocation(itemid, null);
        }
      }
    }]);

})();

(function(){
   "use strict";

    angular.module('directives').directive('scrollDisplay', ['$window', function($window) {
      return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {

          var loc = attrs.hiddenloc;

          var hiddenLoc = (loc == 'top' ? 250 : 80);
          angular.element($window).bind("scroll", function() {
            var windowp = angular.element($window)[0];
            var popup = angular.element(document).find('.md-dialog-container');

            if((windowp.pageYOffset >= hiddenLoc || popup.length > 0) && !element.hasClass("noshow")){
              element.addClass('noshow');
              // Page Pop ups
              element.removeClass('show');
            }
            else if((windowp.pageYOffset < hiddenLoc && popup.length == 0)&& element.hasClass("noshow")){
              element.removeClass('noshow');
              // Page Pop ups
              if(!element.hasClass("show")){
                element.addClass('show');
              }
            }
          });
        }
      }

    }]);

})();


angular.module('directives')
  .directive('scrollTo', ['ScrollTo', function(ScrollTo){
    return {
      restrict : "AC",
      compile : function(){

        return function(scope, element, attr) {
          element.bind("click", function(event){
            ScrollTo.idOrName(attr.scrollTo, attr.offset);
          });
        };
      }
    };
  }])
  .service('ScrollTo', ['$window', 'ngScrollToOptions', function($window, ngScrollToOptions) {
    this.idOrName = function (idOrName, offset, focus) {//find element with the given id or name and scroll to the first element it finds
        var document = $window.document;

        if(!idOrName) {//move to top if idOrName is not provided
          $window.scrollTo(0, 0);
        }

        if(focus === undefined) { //set default action to focus element
            focus = true;
        }

        //check if an element can be found with id attribute
        var el = document.getElementById(idOrName);
        if(!el) {//check if an element can be found with name attribute if there is no such id
          el = document.getElementsByName(idOrName);

          if(el && el.length)
            el = el[0];
          else
            el = null;
        }

        if(el) { //if an element is found, scroll to the element
          if (focus) {
              el.focus();
          }

          ngScrollToOptions.handler(el, offset);
        }
        //otherwise, ignore
      }

  }])
  .provider("ngScrollToOptions", function() {
    this.options = {
      handler : function(el, offset) {
        if (offset) {
          var top = $(el).offset().top - offset;
          window.scrollTo(0, top);
        }
        else {
          el.scrollIntoView();
        }
      }
    };
    this.$get = function() {
      return this.options;
    };
    this.extend = function(options) {
      this.options = angular.extend(this.options, options);
    };
  });

(function(){
   "use strict";

   angular.module('services')
   .factory('preloader', function( $q, $rootScope ) {
     // I manage the preloading of image objects. Accepts an array of image URLs.
     function Preloader( imageLocations ) {
        // I am the image SRC values to preload.
        this.imageLocations = imageLocations;
        // As the images load, we'll need to keep track of the load/error
        // counts when announing the progress on the loading.
        this.imageCount = this.imageLocations.length;
        this.loadCount = 0;
        this.errorCount = 0;
        // I am the possible states that the preloader can be in.
        this.states = {
          PENDING: 1,
          LOADING: 2,
          RESOLVED: 3,
          REJECTED: 4
        };
        // I keep track of the current state of the preloader.
        this.state = this.states.PENDING;
        // When loading the images, a promise will be returned to indicate
        // when the loading has completed (and / or progressed).
        this.deferred = $q.defer();
        this.promise = this.deferred.promise;
      }
      // ---
      // STATIC METHODS.
      // ---
      // I reload the given images [Array] and return a promise. The promise
      // will be resolved with the array of image locations.
      Preloader.preloadImages = function( imageLocations ) {
          var preloader = new Preloader( imageLocations );
          return( preloader.load() );
      };
      // ---
      // INSTANCE METHODS.
      // ---
      Preloader.prototype = {
          // Best practice for "instnceof" operator.
          constructor: Preloader,
          // ---
          // PUBLIC METHODS.
          // ---
          // I determine if the preloader has started loading images yet.
          isInitiated: function isInitiated() {
              return( this.state !== this.states.PENDING );
          },
          // I determine if the preloader has failed to load all of the images.
          isRejected: function isRejected() {
              return( this.state === this.states.REJECTED );
          },
          // I determine if the preloader has successfully loaded all of the images.
          isResolved: function isResolved() {
              return( this.state === this.states.RESOLVED );
          },
          // I initiate the preload of the images. Returns a promise.
          load: function load() {
              // If the images are already loading, return the existing promise.
              if ( this.isInitiated() ) {
                  return( this.promise );
              }
              this.state = this.states.LOADING;
              for ( var i = 0 ; i < this.imageCount ; i++ ) {
                  this.loadImageLocation( this.imageLocations[ i ] );
              }
              // Return the deferred promise for the load event.
              return( this.promise );
          },
          // ---
          // PRIVATE METHODS.
          // ---
          // I handle the load-failure of the given image location.
          handleImageError: function handleImageError( imageLocation ) {
              this.errorCount++;
              // If the preload action has already failed, ignore further action.
              if ( this.isRejected() ) {
                  return;
              }
              this.state = this.states.REJECTED;
              this.deferred.reject( imageLocation );
          },
          // I handle the load-success of the given image location.
          handleImageLoad: function handleImageLoad( imageLocation ) {
              this.loadCount++;
              // If the preload action has already failed, ignore further action.
              if ( this.isRejected() ) {
                  return;
              }
              // Notify the progress of the overall deferred. This is different
              // than Resolving the deferred - you can call notify many times
              // before the ultimate resolution (or rejection) of the deferred.
              this.deferred.notify({
                  percent: Math.ceil( this.loadCount / this.imageCount * 100 ),
                  imageLocation: imageLocation
              });
              // If all of the images have loaded, we can resolve the deferred
              // value that we returned to the calling context.
              if ( this.loadCount === this.imageCount ) {
                  this.state = this.states.RESOLVED;
                  this.deferred.resolve( this.imageLocations );
              }
          },
          // I load the given image location and then wire the load / error
          // events back into the preloader instance.
          // --
          // NOTE: The load/error events trigger a $digest.
          loadImageLocation: function loadImageLocation( imageLocation ) {
              var preloader = this;
              // When it comes to creating the image object, it is critical that
              // we bind the event handlers BEFORE we actually set the image
              // source. Failure to do so will prevent the events from proper
              // triggering in some browsers.
              // --
              // The below removes a dependency on jQuery, based on a comment
              // on Ben Nadel's original blog by user Adriaan:
              // http://www.bennadel.com/members/11887-adriaan.htm
              var image = angular.element( new Image() )
                  .bind('load', function( event ) {
                      // Since the load event is asynchronous, we have to
                      // tell AngularJS that something changed.
                      $rootScope.$apply(
                          function() {
                              preloader.handleImageLoad( event.target.src );
                              // Clean up object reference to help with the
                              // garbage collection in the closure.
                              preloader = image = event = null;
                          }
                      );
                  })
                  .bind('error', function( event ) {
                      // Since the load event is asynchronous, we have to
                      // tell AngularJS that something changed.
                      $rootScope.$apply(
                          function() {
                              preloader.handleImageError( event.target.src );
                              // Clean up object reference to help with the
                              // garbage collection in the closure.
                              preloader = image = event = null;
                          }
                      );
                  })
                  .attr( 'src', imageLocation );
          }
      };
      // Return the factory instance.
      return( Preloader );
   });

})();

(function(){
   "use strict";

   angular.module('services')
    .service('questionService', ['$http','api', function QuestionService($http, api) {
      return {
        getAllQuestions: function(callback){
          $http({
            method: 'GET',
            url: api.questions.all(),
            cache: true
          }).then(function successCallback(response) {
            callback(response);
          }, function errorCallback(response){
            callback(response);
          });
        }
      }
    }]);

})();

(function(){
   "use strict";

   angular.module('services')
    .service('scoreService', ['$http','api', function ScoreService($http, api) {
      return {
        getAllScores: function(callback){
          $http({
            method: 'GET',
            url: api.scores.all()
          }).then(function successCallback(response) {
            callback(response);
          }, function errorCallback(response){
            callback(response);
          });
        },
        submitScore: function(sc, callback){
          var scoreData = JSON.stringify(sc);          

          $http({
            method: 'POST',
            url: api.scores.addScore(),
            headers: {
              'Content-Type': 'application/json'
            },
            data: scoreData
          }).then(function successCallback(response) {
            callback(response);
          }, function errorCallback(response){
            callback(response);
          });

        }
      }
    }]);

})();

(function(){
  'use strict';

  angular.module('config')
    .factory('api', function(){

      return {
        questions: {
          all: function(){
            return "/api/questions/all";
          }
        },
        scores:{
          all: function(){
            return "/api/scores/all";
          },
          addScore: function(){
            return "/api/scores/submit";
          }
        }
      }
    });

})();
