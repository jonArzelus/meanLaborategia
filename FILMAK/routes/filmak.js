var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('filmakdb', ['filmak']);

//Filma guztiak lortzeko
router.get('/filmak', function(req, res, next){
	//res.render('filmak.html');
	db.filmak.find(function(err, filmak){
		if(err) {
			res.send(err);
		}
		res.json(filmak);
	});
});

//Filma zehatz bat lortzeko
router.get('/filma/:izena', function(req, res, next){
	//res.render('filmak.html');
	db.filmak.findOne({izena: req.params.izena}, function(err, filma){
		if(err) {
			res.send(err);
		}
		res.json(filma);
	});
});

//Filma bat gorde DBan
router.post('/filma', function(req, res, next){
	var filma = req.body;
	if(!filma.izena || !filma.deskribapena) {
		res.status(400);
		res.json({
			"error": "Bad data"
		});
	} else {
		db.filmak.save(filma, function(err, filma){
			if(err){
				es.send(err);
			}
			res.json(filma);
		});
	}
});

//Filma bat ezabatu DBtik
router.delete('/filma/:izena', function(req, res, next){
	db.filmak.remove({izena:req.params.izena}, function(err, filma){
		if(err){
			res.send(err);
		}
		res.json(filma);
	});
});

//Filma bat eguneratu
router.put('/filma/:izena', function(req, res, next){
	var filma = req.body;
	var updFilma = {};
	if(filma.izena) {
		updFilma.izena = filma.izena;
	}
	if(filma.deskribapena) {
		updFilma.deskribapena = filma.deskribapena;
	}
	updFilma.gogokoak=filma.gogokoak;
	updFilma.bozkak=filma.bozkak;
	if(!updFilma) {
		res.status(400);
		res.json({
			"error": "Bad data"
		});
	} else {
		db.filmak.remove({izena:req.params.izena}, function(err, filma){
			if(err){
				res.send(err);
			}
		});
		db.filmak.save(filma, function(err, filma){
			if(err){
				es.send(err);
			}
			res.json(filma);
		});
		/*db.filmak.update({izena:req.params.izena}, updFilma, {}, function(err, filma){
		if(err){
			res.send(err);
		}
		res.json(filma);
		});*/
	}
	/*db.filmak.remove({izena:req.params.izena}, function(err, filma){
		if(err){
			res.send(err);
		}
		res.json(filma);
	});*/
});

module.exports = router;