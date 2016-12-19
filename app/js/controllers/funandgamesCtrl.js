(function(){
 "use strict";

  angular.module('funandgamesCtrl').controller('FunAndGamesController', ['$state', 'jInfo', function($state, jInfo){
    var vm = this;
    /*Variables*/
    vm.selected = null;

    jInfo.questions.all(function(results){
      vm.questions = results;
      vm.quiz = setUpReportCard(results);
    });

    /*Functions*/

    function setUpReportCard(questions){
      // question = {"question":"", "answer":"", "display":"", "selected":""}
      var reportCard = {"questions":[], "score":0};

      for(var i =0; i < questions.length; i++){
        var x = Math.floor((Math.random() * 4) + 0);
        var displayArr = questions[i].answer.display;
        var displayList = displayArr.splice(x,0,questions[i].answer.final);
        
        var tmpQuestion = {"question":questions[i].question, "answer":questions[i].answer.final, "display":displayArr, "selected":""};

        reportCard.questions.push(tmpQuestion);
      }
      return reportCard;
    }

  }]);

})();
