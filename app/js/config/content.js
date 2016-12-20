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
