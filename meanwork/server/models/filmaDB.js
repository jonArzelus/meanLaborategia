var mongoose = require('mongoose');

module.exports = mongoose.model('Filma', {
  name: String,
  urtea: String,
  sipnosia: String,
  irudia: String,
  iritziak:[]
});