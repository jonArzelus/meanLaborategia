var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mytasklist', ['tasks']);

router.get('/tasks', function(req, res, next){
	//res.send('TASK API');
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

module.exports = router;

/*
use mytasklist;
db.createCollection("tasks");
var tk = db.getCollection("tasks");
tk.insertOne({izena:"jon",abizena:"arzelus"})
tk.insertOne({izena:"mikel",abizena:"ocejo"})
*/