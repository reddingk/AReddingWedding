(function(){
 "use strict";

  angular.module('weddingPartyCtrl').controller('WeddingPartyController', ['$state', function($state){
    var vm = this;
    /*Functions*/

    /*Variables*/
    vm.specialParty = { groomsman: { name: "Jason Pena", image: "suit-on-hanger.svg",  bio:"This guy Jason, we met in college I think our first convo was about how he was not trying to steal Grace from me.  But after that he has been one of the best friends I have. From roommates, to ‘Balling for Jesus’, to losing an ID in a snow blower we have had some good times."},
                        bridesmaids: { name: "Naomi Manning", image:"dress-on-statue.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
                      };
    vm.partylist = [
      { groomsman: { name: "Kamron Redding", image: "tux.svg",  bio:"My brother the one who stole me only child life style from me when he came in the world.  We have grown up together in more states than I care to count.  I have watch him grow into a great person being the one who most definitely says the prayer at dinner to starting a non-profit to feed the homeless ‘1ReddBag’."},
        bridesmaids: { name: "Nicole Manning", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Ayi Mensah", image: "tux.svg",  bio:"My first HS football practice I stepped on the field had to go head to head against this guy.  Thinking he was my friend I thought it would be ok…. Lets just say I had to decide if I was really about that football life.  But from playing ball in every court in Maryland to skipping class to go to make food in Mrs. Turneys class this guy has been one of my friends to the fullest even if he is a Golden State Fan."},
        bridesmaids: { name: "Jackie Stevens", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Dwayne Washington", image: "tux.svg",  bio:"If you know me you know I have moved a lot in my life, This man hands down has known me longer than any non family member.  We played ball together, Worked together (idk how we kept that job), Got on each others nerves but still worked it out, and if you ask him he started the nickname that’s followed me since Middle school.  Through it all one of my truest friends. "},
        bridesmaids: { name: "Ashley Allyn", image:"bride-dress.svg", bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Greg Parker", image: "tux.svg",  bio:"Mr. Parker, aka Gregorio Vasquez, aka G da B, aka the Father of my Goddaughter I feel like I have known this guy longer than I probably have.  That probably is because I think I have more stories with this guy then anybody I know and possibly the only person on the list i’ll admit might have a better jump shot than me.  One of those people that is family without being family."},
        bridesmaids: { name: "Nina Dawson", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Andre Valines", image: "tux.svg",  bio:"‘Goodness’ the man that can probably palm the moon with his hands.  I met this guy playing at UD playing ball in the little bob and I promise you I thought he was my age of older.  He is one of the truest characters I know but enjoys life in the same mindset as me.  Even tho I call him my ‘Lowkey Son’ he one of those people you can’t help look too."},
        bridesmaids: { name: "Kaila Suarez", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Khalin Redding", image: "tux.svg",  bio:"The youngest of the Redding boys, I truly can remember thinking we were going to take him back to the hospital one day.  This kid has really grown up a lot you wouldn’t believe it.  Seeing him finish his engineering degree at Howard Univ. now I feel like the odd one out not going to an HBCU.  He is definately comedy of a person but don’t get into a debate with him tho you won’t win."},
        bridesmaids: { name: "Dominique Bridges", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Marquis Waters", image: "tux.svg",  bio:"‘Quis’ might have hands down provided us with more ad-libs and sound bite’s than anybody I know and if I ever won an award I would need him to give my introduction.  Jokes for days and my unofficial spades Rival / Partner and another one that I have stories for days with this guy.  From Erica Coleman’s class, to the 910 rap battles, to making PBJ sandwiches (...no comment)."},
        bridesmaids: { name: "Asia Davis", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      },
      { groomsman: { name: "Vince Wilson", image: "tux.svg",  bio:"If someone asked me who I would want to grow up to be like I would probably say Vince.  Two Degrees before 25, works at an Ivy League Univ., and lives the American dream.  Me and him go back to FAME back in high school and now have taken trips from Miami, New Orleans, to Mexico.  He always has a story just as long as Daphne doesn’t think he’s got a new best friend."},
        bridesmaids: { name: "Daphne Blakey", image:"bride-dress.svg" ,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi dictum, fringilla metus at, aliquam tortor. Aenean sollicitudin bibendum mauris at consequat. In gravida iaculis magna eu ornare. Cras viverra aliquam augue vel rutrum."}
      }
    ];

  }]);

})();
