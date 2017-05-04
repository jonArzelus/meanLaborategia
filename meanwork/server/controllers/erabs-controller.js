var Erab = require('../models/erabDB');

module.exports.create = function (req, res) {
  //var erab = new Erab(req.body);
  var erab = new Erab({
		izena: req.body.izena,
	  abizena: req.body.abizena,
	  postaElektronikoa: req.body.posta,
	  pasahitza: req.body.pasahitza,
	  rol: 'user',
	  gogokoDitu: [],
	  bozkatuDitu:[]
  });
  erab.save(function (err, result) {
  	if(err) {
			res.send(err);
		}
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Erab.find({}, function (err, result) {
    if (err) {
    	res.send(err);
    }
		if (result) {
			res.json(result);
		} else {
			res.send(JSON.stringify({
				error : 'Error'
			}));
		}
  });
}

//Errore kontrolarekin eta eskatutako datuak dituen erabiltzailea itzultzen du
module.exports.login = function(req, res) {
	Erab.find({postaElektronikoa: req.params.posta, pasahitza: req.params.pass}, function(err, result) {
		if(err) {
			res.send(err);
		}
		res.json(result);
	});
}

module.exports.frogacreate = function (req, res) {
  //var erab = new Erab(req.body);
  var erab = new Erab({
		izena: 'asdf',
	  abizena: 'asdf',
	  postaElektronikoa: 'asdf@asdf.com',
	  pasahitza: 'asdf1234',
	  rol: 'user',
	  gogokoDitu: [],
	  bozkatuDitu:[]
  });
  erab.save(function (err, result) {
  	if(err) {
			res.send(err);
		}
    res.json(result);
  });
}