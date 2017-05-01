var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var filmak = require('./routes/filmak');
var erabiltzaileak = require('./routes/erabiltzaileak');

var port = 3000;

var app = express();

//Zer karpeta erabili view-ak kokatzeko
app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Konfiguratu non jarri fitxategi estatikoen karpeta
app.use(express.static(path.join(__dirname, 'client')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//URL
app.use('/', index);
app.use('/api', filmak);
app.use('/api', erabiltzaileak);

app.listen(port, function(){
	console.log('zerbitzaria abiarazita '+port+' portuan...');
});