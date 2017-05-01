var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('filmakdb', ['erabiltzaileak']);

//Erabiltzaile guztien zerrenda lortu
router.get('/erabiltzaileak', function(req, res, next){
	db.erabiltzaileak.find(function(err, erabiltzaileak){
		if(err) {
			res.send(err);
		}
		res.json(erabiltzaileak);
	});
});

//Erabiltzaile zehatz bat lortzeko (login)
router.get('/erabiltzailea/:izena/:pass', function(req, res, next){
	db.erabiltzaileak.findOne({izena: req.params.izena, pasahitza: req.params.pass}, function(err, erabiltzailea){
		if(err) {
			res.send(err);
		}
		res.json(erabiltzailea);
	});
});

//Erabiltzaile bat gorde DBan
router.post('/erabiltzailea', function(req, res, next){
	var erabiltzailea = req.body;
	if(!erabiltzailea.postaElektronikoa || !erabiltzailea.pasahitza) {
		res.status(400);
		res.json({
			"error": "Bad data"
		});
	} else {
		db.erabiltzaileak.save(erabiltzailea, function(err, erabiltzailea){
			if(err){
				res.send(err);
			}
			res.json(erabiltzailea);
		});
	}
});

//Erabiltzaile bat ezabatu DBtik
router.delete('/erabiltzailea/:id', function(req, res, next){
	db.erabiltzaileak.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, erabiltzailea){
		if(err){
			res.send(err);
		}
		res.json(erabiltzailea);
	});
});

//Erabiltzaile baten gogoko filmak lortu
/*router.get('/erabiltzailea/:id/filmak', function(req, res, next){
	db.erabiltzaileak.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, erabiltzailea){
		if(err) {
			res.send(err);
		}
		//res.json(erabiltzailea);
		erabiltzailea.gogokoak.forEach(function)
		db.filmak.find({}, function(err, filmak) {
			if(err) {
				res.send(err);
			}
			res.json(filmak);
		});
	});
});*/

module.exports = router;