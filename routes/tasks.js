var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mytasklist', ['tasks']);

//get all tasks
router.get('/tasks', function(req, res, next){
	//res.send('TASK API');
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

//get a movie
router.get('/task/:izena', function(req, res, next){
	db.tasks.findOne({izena:req.params.izena}, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

//save task
router.post('/task', function(req, res, next){
	var task = req.body;
	if(!task.izena || task.abizena) {
		res.status(400);
		res.json({
			"error": "Bad data"
		});
	} else {
		db.stasks.save(task, function(err, task){
			if(err){
				es.send(err);
			}
			res.json(task);
		});
	}
});

//Delete a task
router.delete('/task/:izena', function(req, res, next){
	db.tasks.remove({izena:req.params.izena}, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

//Update task
router.put('/task/:izena', function(req, res, next){
	var task = req.body;
	var updTask = {};
	if(task.izena) {
		updTask.izena = task.izena;
	}
	if(task.abizena) {
		updTask.abizena = task.abizena;
	}
	if(!updTask) {
		res.status(400);
		res.json({
			"error": "Bad data"
		});
	} else {
		db.tasks.update({izena:req.params.izena}, updTask, {}, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
		});
	}
	/*db.tasks.remove({izena:req.params.izena}, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});*/
});

module.exports = router;
