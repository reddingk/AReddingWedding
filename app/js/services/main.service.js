(function(){
    "use strict";
 
    angular.module('services')
     .service('mainService', ['$http','api', function QuestionService($http, api) {
       return {
         getAllEvents: function(callback){
           $http({
             method: 'GET',
             url: api.main.events(),
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
 