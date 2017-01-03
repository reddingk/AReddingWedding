(function(){
 "use strict";

  angular.module('funandgamesCtrl').controller('FunAndGamesController', ['$state', 'jInfo', function($state, jInfo){
    var vm = this;
    /*Variables*/
    vm.errorString = "";
    vm.displayError = false;
    vm.displayScore = false;
    vm.userName = "";
    vm.submitted = false;

    var topScoreMax = 10;

    var userinfo = jInfo.quizInfo.get.info();

    if(userinfo.score < 0) {
      jInfo.questions.all(function(results){
        vm.questions = results;
        vm.quiz = setUpReportCard(results);
      });
    }
    else {
      vm.quiz = setUpReportCard([]);
      vm.quiz.score = userinfo.score;
      vm.quiz.wrongQuestions = userinfo.reportCard;
      vm.displayScore = true;
      vm.submitted = (userinfo.name != "");

      jInfo.scores.getAll(function(res){
        var allResults = res.sort(function(a, b) {
            return parseFloat(b.score) - parseFloat(a.score) || new Date(b.date) - new Date(a.date);
        });
        vm.topScores = allResults.slice(0,topScoreMax);
      });
    }

    /*Functions*/

    function setUpReportCard(questions){
      // question = {"question":"", "answer":"", "display":"", "selected":""}
      var reportCard = {"questions":[], "score":0, "wrongQuestions":[]};

      for(var i =0; i < questions.length; i++){
        var x = Math.floor((Math.random() * 4) + 0);
        var displayArr = questions[i].answer.display;
        var displayList = displayArr.splice(x,0,questions[i].answer.final);

        var tmpQuestion = {"question":questions[i].question, "answer":questions[i].answer.final, "display":displayArr, "selected":""};

        reportCard.questions.push(tmpQuestion);
      }
      return reportCard;
    }

    vm.selectQuestionAnswer = function(question, answer){
      vm.displayError = false;
      question.selected = (question.selected == answer ? "" : answer);
    }
    vm.isSelectAnswer = function(question, answer){
      return (question.selected == answer ? "selected" : "");
    }

    vm.checkQuizAnswers = function(){
      vm.displayError = false;
      // check that all answers are filled
      var answerSheet = vm.quiz.questions;
      var emptyQuestions = [];
      var correctAnswers = 0;
      var wrongQuestions = [];
      for(var i=0; i < answerSheet.length; i++){
        if(answerSheet[i].selected == ""){
          emptyQuestions.push((i+1));
        }
        else if(answerSheet[i].selected == answerSheet[i].answer) {
          correctAnswers = correctAnswers + 1;
        }
        else {
          wrongQuestions.push({"question":answerSheet[i].question, "theirAnswer":answerSheet[i].selected, "rightAnswer": answerSheet[i].answer})
        }
      }

      if(emptyQuestions.length == 0){
        vm.quiz.score = (correctAnswers / answerSheet.length) * 100;
        vm.quiz.wrongQuestions = wrongQuestions;
        // Set User Info
        jInfo.quizInfo.set.score(vm.quiz.score);
        jInfo.quizInfo.set.reportCard(vm.quiz.wrongQuestions);

        vm.displayScore = true;
      }
      else {
        vm.errorString = "Please Answer Question" +(emptyQuestions.length > 1 ? "s" : "") + " [" + emptyQuestions.join()+"] And Resubmit.";
        vm.displayError = true;
      }
    }

    vm.showHighScores = function(direction) {

      // Display High Score
      if(direction == "toggle"){
        vm.showScore = !vm.showScore;
      }
      else {
        vm.showScore = (direction == "open" ? true : false);
      }
      jInfo.scores.getAll(function(res){
        var allResults = res.sort(function(a, b) {
            return parseFloat(b.score) - parseFloat(a.score) || new Date(b.date) - new Date(a.date);
        });
        vm.topScores = allResults.slice(0,topScoreMax);
      });
    }

    vm.submitScore = function(){
      vm.displayError = false;
      if(vm.userName.length > 0){
        jInfo.quizInfo.set.name(vm.userName);
        // submit score
        var submission = {name: vm.userName, score: vm.quiz.score, date: new Date(), wrongAnswers: vm.quiz.wrongQuestions};
        jInfo.scores.addScore(submission, function(results){
          vm.submitted = results.added;
          vm.showHighScores('open');
        });
      }
      else {
        vm.errorString = "Please Enter in your name first.";
        vm.displayError = true;
      }
    }

  }]);

})();
