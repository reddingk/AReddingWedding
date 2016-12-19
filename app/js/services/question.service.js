(function(){
   "use strict";

   angular.module('services')
    .service('questionService', ['$http','api', function QuestionService($http, api) {
      return {
        getAllQuestions: function(callback){
          $http({
            method: 'GET',
            url: api.questions.all()
          }).then(function successCallback(response) {
            callback(response);
          }, function errorCallback(response){
            callback(response);
          });
        }
      }
    }]);

})();
