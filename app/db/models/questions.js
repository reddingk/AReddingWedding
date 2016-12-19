var mongoose = require('mongoose');

module.exports = mongoose.model('questions', {
  //_id: {type: String, default: ''},
  question: {type: String, default: ''},
  answer: {
      final:{type: String, default: ''},
      display:[{type: String, default: ''}]
  },
  about: {type: String, default: ''}
});
