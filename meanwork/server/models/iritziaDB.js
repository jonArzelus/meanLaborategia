var mongoose = require('mongoose');

module.exports = mongoose.model('Iritzia', {
  egilea: String,
  data: String,
  iruzkina: String,
  puntuazioa: String
});