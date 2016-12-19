var Questions = require('./models/questions');

function getAllQuestions(res) {
	Questions.find(function(err, users){
		if(err){ res.send(err); }

		res.json(users);
	})
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all Questions
    app.get('/api/questions/all', function (req, res) {
        getAllQuestions(res);
    });
};
