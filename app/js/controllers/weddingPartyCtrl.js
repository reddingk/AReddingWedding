(function(){
 "use strict";

  angular.module('weddingPartyCtrl').controller('WeddingPartyController', ['$state', function($state){
    var vm = this;
    /*Functions*/
    vm.clickParty = clickParty;
    vm.isSelected = isSelected;

    /*Variables*/
    vm.selectedParty = null;
    vm.specialParty = { groomsman: { name: "Jason Pena", image: "suit-on-hanger.svg",  bio:"Mr. Pena the old man of the group my former roommate and one of my truest friends.  He currently lives out in Boston, MA, even  though i’m working on getting him to move to MD.  Despite this I talk to him more than anyone (other than Grace I guess) and our friendship is real.  With everything we have been through he had to be the one chosen to officially be my Best Man."},
                        bridesmaids: { name: "Naomi Manning", image:"dress-on-statue.svg", bio:"Naomi Manning is my older sister and best friend. She lives in Los Angeles, California soaking up the sun and working hard. Since I understood the concept of marriage I knew she was going to be standing right next to me on my special day. "}
                      };
    vm.partylist = [
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
