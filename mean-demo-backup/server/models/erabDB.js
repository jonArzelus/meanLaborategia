var mongoose = require('mongoose');

module.exports = mongoose.model('Erab', {
  izena: String,
  abizena: String,
  posta: String,
  pasahitza: String
});