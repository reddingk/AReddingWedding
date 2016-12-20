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
