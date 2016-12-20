var mongoose = require('mongoose');

module.exports = mongoose.model('questions', {
  question: {type: String, default: ''},
  answer: {
      final:{type: String, default: ''},
      display:[{type: String, default: ''}]
  },
  about: {type: String, default: ''}
});
