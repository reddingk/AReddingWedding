(function(){
  'use strict';

  angular.module('config')
    .factory('api', function(){

      return {
        questions: {
          all: function(query){
            return "/api/questions/all";
          }
        }
      }
    });

})();
