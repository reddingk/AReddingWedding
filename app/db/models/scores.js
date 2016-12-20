var mongoose = require('mongoose');

module.exports = mongoose.model('scores', {
  name: {type: String, default: ''},
  score: {type: String, default: ''},
  date: {type: Date, default: null},
  wrongAnswers: [{
      question:{type: String, default: ''},
      theirAnswer:{type: String, default: ''}
  }]
});
