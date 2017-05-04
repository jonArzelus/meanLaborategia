var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shcemaErab = new Schema({
	izena: String,
  abizena: String,
  postaElektronikoa: String,
  pasahitza: String,
  rol: String,
  gogokoDitu: [],
  bozkatuDitu: []
}, {
	collection: 'Erab'
});
module.exports = mongoose.model('Erab', shcemaErab);;
/*
{ izena: "asdf",
  abizena: "asdf",
  postaElektronikoa: "asdf@asdf.com",
  pasahitza: "asdf1234",
  rol: "user",
  gogokoDitu: [],
  bozkatuDitu: []
}
*/