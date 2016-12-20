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
