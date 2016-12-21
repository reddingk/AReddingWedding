var Questions = require('./models/questions');
var Scores = require('./models/scores');

var bodyParser = require('body-parser');

// Get All Questions for Game
function getAllQuestions(res) {
	Questions.find(function(err, questions){
		if(err){ res.send(err); }

		res.json(questions);
	})
};

// Post Score from Website Game
function postUserScore(req, res) {
	var newScore = Scores(req);
	newScore.save(function(err){
		if(err){ res.send(err);	}
		res.json({"added":true});
	})
};

// Get All Scores
function getAllScores(res) {
	Scores.find(function(err, scores){
		if(err){ res.send(err); }

		res.json(scores);
	})
};

var jsonParser = bodyParser.json();

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all Questions
    app.get('/api/questions/all', function (req, res) {
        getAllQuestions(res);
    });

		// post user score
		app.post('/api/scores/submit', jsonParser, function (req, res) {
      	postUserScore(req.body, res);
    });

		// get all user scores
		app.get('/api/scores/all', function (req, res) {
        getAllScores(res);
    });
};
