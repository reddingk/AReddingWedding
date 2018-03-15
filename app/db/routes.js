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
var eventsData = [
	{
	 title: 'Engagement Party', date:"2017-04-01 14:30:00",
	 invite:true,
	 text: "To kick off our wedding events we will be having our engagement party at Barcocina Resturant which is located off the water in Baltimore's Fells Point.  As much as we would love to have all of our friends and family there we will be sending out our invitations for this event.",
	 directions: null,
	 location: {name: "Barcocina", address:"1629 Thames St, Baltimore, MD 21231" },
	 photos: [{id:0, image:"img/eventimgs/Engagement/b1.JPG"}, {id:1, image:"img/eventimgs/Engagement/b2.JPG"}, {id:2, image:"img/eventimgs/Engagement/b3.JPG"}]},
	{
	 title: 'The Wedding', date:"2018-05-19 16:00:00",
	 invite:false,
	 text: "We will officially be jumping the broom at Grace's home church, Bethel Gospel Tabernacle.  All are welcome to our ceremony to watch us tie the knot and take as many pictures as possible.",
	 directions:[{title:"Hotel To Church", url:"https://www.google.com/maps/dir/The+Inn+at+Fox+Hollow,+7755+Jericho+Turnpike,+Woodbury,+NY+11797/110-25+Guy+R+Brewer+Blvd,+Jamaica,+NY+11433/@40.7395534,-73.7101714,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89c282170e244853:0xe68f6d40fb17fcb!2m2!1d-73.4844564!2d40.8135966!1m5!1m1!1s0x89c2612ea797ad27:0x7d089062d6b7d6c9!2m2!1d-73.788107!2d40.692739"}],
	 location: {name: "Bethel Gospel Tabernacle", address:"11025 Guy R Brewer Blvd., Jamaica, NY 11433" },
	 photos: [{id:0, image:"img/eventimgs/Church/C0.jpg"}],
	 additionalinfo: []
   },
	{
	 title: 'The Reception', date:"2018-05-19 18:30:00",
	 invite:true,
	 text: "Our wedding reception will be hosted in the beautiful Fox Hollow, as much as we would love to have everyone there it is invitation only.  This elegant Long Island wedding venue is spread across a picturesque 8-acre estate, accented with lush gardens, lively waterfalls, and fountains.",
	 directions:[{title:"Church To Reception Hall", url:"https://www.google.com/maps/dir/110-25+Guy+R+Brewer+Blvd,+Jamaica,+NY+11433/7725+Jericho+Turnpike,+Woodbury,+NY+11797/@40.752853,-73.7782221,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89c2612ea797ad27:0x7d089062d6b7d6c9!2m2!1d-73.788107!2d40.692739!1m5!1m1!1s0x89c28217086b6a39:0xafe1432fb323c298!2m2!1d-73.4851884!2d40.8137821"}],
	 location: {name: "The Fox Hollow", address:"7725 Jericho Turnpike, Woodbury, New York 11797" },
	 photos: [{id:0, image:"img/eventimgs/Reception/fh1.jpg"}, {id:1, image:"img/eventimgs/Reception/fh2.jpg"}, {id:2, image:"img/eventimgs/Reception/fh3.jpg"}, {id:3, image:"img/eventimgs/Reception/fh4.jpg"}, {id:4, image:"img/eventimgs/Reception/fh5.jpg"}, {id:5, image:"img/eventimgs/Reception/fh6.jpg"}, {id:6, image:"img/eventimgs/Reception/fh7.jpg"}, {id:7, image:"img/eventimgs/Reception/fh8.jpg"}],
	 additionalinfo:[
		 {"type":"title", "content":"Hotel Information"},
		 {"type":"text", "class":"bold", "content":"The Inn At Fox Hollow"},  
		 {"type":"text", "content":"Located on the grounds of Fox Hollow is the Fox Hollow Boutique All-Suites Hotel.  We have blocked rooms for our guests at this hotel to help you fully enjoy this day with us."}, 
		 {"type":"text", "class":"bold", "content":"To reserve your room:"},
		 {"type":"text", "content":"Please call 516-224-8100 and mention that you are a guest of the Manning/Redding Wedding."}, 
		 {"type":"text", "class":"bold", "content":"Special Room Rate: $239.00 per night"}, 
		 {"type":"link", "content":"More Information", "url":"http://www.thefoxhollow.com/hotel.aspx"},
		 {"type":"divider"},
		 {"type":"text", "class":"bold", "content":"Holiday Inn Plainview"}, 
		 {"type":"text", "content":"Discover the fun of staying on scenic Long island in our modern hotel located in Plainview"},
		 {"type":"text", "class":"bold", "content":"To reserve your room:"},
		 {"type":"text", "content":"Please call 516-349-7400 and mention that you are a guest of the Manning/Redding Wedding or use the code MNR"}, 
		 {"type":"text", "class":"bold", "content":"Special Room Rate: $149.00 per night"}, 
		 {"type":"link", "content":"More Information", "url":"http://www.holidayinnplainview.com"},
		]
   },
   {
	title: 'The Honeymoon', date:"2018-05-20 16:00:00",
	invite:false,
	text: "You can't go wrong with a honeymoon in Hawaii",
	directions: null,
	location: {name: "Kaua'i Marriott Resort", address:"3610 Rice St, Lihue, HI 96766" },
	photos: [{id:0, image:"img/eventimgs/test8.jpg"},{id:1, image:"img/eventimgs/test9.jpg"},{id:2, image:"img/eventimgs/test10.jpg"}],
	additionalinfo: []
  }];

var jsonParser = bodyParser.json();

module.exports = function (app) {

	// api ---------------------------------------------------------------------
	// get all Events
    app.get('/api/events/all', function (req, res) {
		res.json(eventsData);        
    });
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
