(function(){
  'use strict';

  angular.module('dataconfig')
  .service('jInfo', ['jData', '$filter', 'questionService', function JInfo(jData, $filter, questionService){
    /* Variables */

    /* Full Service*/
    return {
      user: {
        getAll: function() {
          return null;
        }
      },
      questions:{
        all: function(callback){
          questionService.getAllQuestions(function(res){
              callback(res.data);
          });
        }
      }
    }
  }])
  .factory("jData", function(){
    function JInfoData(){
      var vm = this;

    }
    return new JInfoData();
  });

})();
