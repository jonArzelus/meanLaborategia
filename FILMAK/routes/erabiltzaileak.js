var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('filmakdb', ['erabiltzaileak']);

router.get('api/erabiltzaileak', function(req, res, next){
	//res.render('erabiltzaileak.html');
	db.erabiltzaileak.find(function(err, erabiltzaileak){
		if(err) {
			res.send(err);
		}
		res.json(erabiltzaileak);
	});
});

module.exports = router;