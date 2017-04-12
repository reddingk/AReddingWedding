(function(){
  'use strict';

  angular.module('dataconfig')
  .service('jInfo', ['jData', '$filter', '$http', 'questionService', 'scoreService', function JInfo(jData, $filter, $http, questionService, scoreService){
    /* Variables */
    /* Repeating functions */
    function stringFormat(str, args) {
       var content = str;
       for (var i=0; i < args.length; i++) {
            var replacement = '{' + i + '}';
            content = content.replace(replacement, args[i]);
       }
       return content;
    }

    function getImages( photoList, loc, retList, callback){
      if(loc >= photoList.length){
        callback(retList);
      }
      else {
        var url = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key={0}&photoset_id={1}&user_id={2}&format=json&nojsoncallback=1";

        var fullUrl = stringFormat(url, [jData.galleryApi.key, photoList[loc].id, jData.galleryApi.userId]);
        $http({
          method: 'GET',
          url: fullUrl,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function successCallback(response) {
          if(response != undefined && response.data != undefined){
            var responseList = response.data.photoset.photo;
            var photoUrl = "http://c1.staticflickr.com/{0}/{1}/{2}_{3}_b.jpg";
            var tmpObj = {"title": photoList[loc].title, "credit": photoList[loc].credit, "images":[] };
            for(var j=0; j < responseList.length; j++){
              tmpObj.images.push({"id":j, "title":responseList[j].title, "img":stringFormat(photoUrl, [responseList[j].farm, responseList[j].server, responseList[j].id, responseList[j].secret])});
            }
            retList.push(tmpObj);
            getImages(photoList, (loc+1), retList, callback);
          }
          else{  getImages(photoList, (loc+1), retList, callback);  }
        }, function errorCallback(response){
          getImages(photoList, (loc+1), retList, callback);
        });
      }
    }
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
        all: function(callback){
          var retList = [];
          getImages(jData.photoLibraries, 0, retList, callback);
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

      vm.galleryApi = {"key":"37ecabdfda65c6e2cf2847f4bc54ce44", "secret":"6ec8a192a3e00e44", "userId":"149188780@N02"};

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


          vm.photoLibraries = [
            {"title":"Engagement Party", "id":"72157680705936860", "credit":false},
            {"title":"Engagement Photos - Inside City Tap House", "id":"72157682513417685", "credit":true},
            {"title":"Engagement Photos - University of Delaware", "id":"72157682513484395", "credit":true},
            {"title":"Thru The Years", "id":"72157682513516445", "credit":false}
          ];
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
              content:'After about 2 years of going through the struggles of college I came to my senses and realized she has been my best friends and there for me when it counted.  With that being said we decided that we should give dating another run this time knowing each other a little better.  Seeing that we were now reaching the end of our time at UD we knew our next step would be a long distance relationship with me moving back to Maryland and Grace eventually going back to New York.  Lets just say if I could have gotten paid for the hours that I spent on I-95 I could have probably payed for this whole wedding.'
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
              content:'When people ask you, when you decided you wanted to propose I feel like they expect this elaborate story but for me I really woke up one day and decided I wanted to marry this girl.  People that know me know that I am a slightly elaborate person so I had to make sure that I had an something big planned.  After enlisting the help of a few friends to help me pick out the ring and make sure her nails were done, I was ready for the proposal.'
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
                              bridesmaids: { name: "Naomi Manning", image:"dress-on-statue.svg", bio:"Naomi Manning is my older sister and best friend. She lives in Los Angeles, California soaking up the sun and working hard. I don’t make many big decisions before talking to her first, she was the one who helped me decide I should go to the University of Delaware (where I met Kris). Since I understood the concept of marriage I knew she was going to be standing right next to me on my special day."}
                            };
          vm.partyRegular = [
            { groomsman: { name: "Kamron Redding", image: "tux.svg",  bio:"The middle of the three Redding boys and our family chaplin.  He lives in Germantown, Md but the two of us have grown up together in more states than I care to count.  I have watched him grow into a great person from working as a registered Nurse at the Washington Hospital Center, becoming a brother of Alpha Phi Alpha Fraternity inc., to starting a non-profit to feed the homeless ‘1ReddBag’."},
              bridesmaids: { name: "Nicole Manning", image:"bride-dress.svg", bio:"Nicole Manning is the oldest sister and has shared so much wisdom with me. She lives in Brooklyn, New York and has a creative spirit. She’s the best lawyer I know and always comes to my defense. She’s the best older sister a girl can ask for and I couldn’t imagine getting married without her there."}
            },
            { groomsman: { name: "Ayi Mensah", image: "tux.svg",  bio:"Ayi was one of the people I grew up with in Maryland from middle school to high school football.  Despite getting his degree and working as a personal trainer I think I have influenced him to join the technical world as he works to become a certified Database Administrator. Even tho he is a Golden State Fan I can consider him one of my closest friends and a person that was a lock to be one of my groomsman."},
              bridesmaids: { name: "Jackie Stevens", image:"bride-dress.svg" ,bio:"Jackie Stevens is my fellow New Yorker and great friend. She lives in Harlem, New York and makes the best cupcakes I know. She doesn’t let anything stop her from her dreams and is a great mother to her son, Ky. I can’t wait to share more memories with her on my big day."}
            },
            { groomsman: { name: "Dwayne Washington", image: "tux.svg",  bio:"If you know me you know I have moved a lot in my life, This man hands down has known me longer than any non family member.  Due to our longevity of a friendship I have seen him grow from a little knuckleheads to having his own productions company.  Despite the fact he sometimes gets on my last nerves he’s one of my best friends. "},
              bridesmaids: { name: "Ashley Alleyne", image:"bride-dress.svg", bio:"Ashley Alleyne is my fellow UDGC (University of Delaware Gospel Choir) alumni. She lives in Philadelphia, PA and is always down for my crazy ideas. She is going to make my day even more special."}
            },
            { groomsman: { name: "Greg Parker", image: "tux.svg",  bio:"Mr. Parker aka the Father of my Goddaughter (she’s going to be very looked out for as she grows up). I feel like I have known this guy longer than I probably have this may because I have more stories with this guy then anybody I know. He possibly the only person on the list i’ll admit might have a better jump shot than me.  One of those people that is family without being family."},
              bridesmaids: { name: "Nina Dawson", image:"bride-dress.svg" ,bio:"Nina Dawson is my friend who truly understands my love for animals and my quirky humor. She always gives me sound advice when I need it. She’s a hard worker and the most organized person I know. I’m grateful to have a bridesmaid like her on my special day."}
            },
            { groomsman: { name: "Andre Valines", image: "tux.svg",  bio:"I met this guy at University of Delaware shooting some b-ball outside of the school and we have been close almost instantly. I call him my UD son (even tho he hates it) but despite his age he is one of the people I look up too.  From working with the youth to becoming a prominent Legalshield associate i’ve already seen him do great things."},
              bridesmaids: { name: "Kaila Suarez", image:"bride-dress.svg" ,bio:"Kaila Suarez is the puerto rican princess, who likes things her way. She has a warm and giving heart and we can always have a good conversation. She works hard at everything including at her friendships. I’m happy she decided to be my bridesmaid."}
            },
            { groomsman: { name: "Khalin Redding", image: "tux.svg",  bio:"The youngest of the Redding boys, I truly can remember thinking we were going to take him back to the hospital one day.  He has really grown up watching him finish his engineering degree at Howard University now I feel like the odd one out not going to an HBCU.  He is definitely a person you don’t get into a debate with because you won’t win."},
              bridesmaids: { name: "Dominique Bridges", image:"bride-dress.svg" ,bio:"Dominique Bridges was one of my first friends in college, we clicked instantly based off the fact we had so many things in common. She will go out her way for her friends to support them and help them with whatever, so I know she’ll be there on my big day."}
            },
            { groomsman: { name: "Marquis Waters", image: "tux.svg",  bio:"If you don’t know him you need too he brings life to any event.  I have had the opportunity to be apart of the story called ‘The life of Quis’.  From spades nights around the campus of University of Delaware, to watching him becoming a brother of Phi Beta Sigma Fraternity Inc., graduating with a major in African American Studies, to becoming a part of the U.S. Air Force.  With all of that I’m glad he could be there with me on my day."},
              bridesmaids: { name: "Asia Davis", image:"bride-dress.svg" ,bio:"Asia Davis and I met near the end of my college career but we clicked right away. We always have a good time when we get together. She’s the friend that makes things happen and the one always planning our friend vacations. I feel blessed to have a friend like her."}
            },
            { groomsman: { name: "Vince Wilson", image: "tux.svg",  bio:"If someone asked me who I would want to grow up to be like I would probably say Vince.  Two Degrees before 25, works at an Ivy League University, brother of Omega Psi Phi Fraternity Inc., and can out dress anyone you know.  Me and him go back to FAME back in high school and now have taken trips from Miami, New Orleans, to Mexico.  With all of these places he was one of the first people I wanted to add to my groomsman."},
              bridesmaids: { name: "Daphne Blakey", image:"bride-dress.svg" ,bio:"Daphne Blakey was my roommate 3 years in a row during college. During this time I came to realize what a great friend she was, and realized I finally found a friend who appreciated naps as much as me. She always hid her snacks when living in the dorms, but always shared with me.  I can’t wait to share more memories with her."}
            }
          ];

          /*Events*/
          vm.events = [
            {title: 'Engagement Party', date:new Date("2017-04-01 14:30:00"),
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
