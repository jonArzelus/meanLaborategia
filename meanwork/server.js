var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    erabsController   = require('./server/controllers/erabs-controller');
    filmakController   = require('./server/controllers/filmak-controller');
    iritziakController   = require('./server/controllers/iritziak-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo2');
//mongoose.connect('localhost', 'filmakdb');
/*setTimeout(function(){
	//0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    console.log("Konexioaren egoera: "+mongoose.connection.readyState);
}, 3000);*/
mongoose.connection.on('connected', function(){console.log("Konexioa egina datubasera")});
mongoose.connection.on('error', function(){console.log("Errorea datubasera konexioa egitean")});
mongoose.connection.on('disconnected', function(){console.log("Datubasera konexioa amaituta")});

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.get('/filmak', function (req, res) {
  res.sendfile(__dirname + '/client/views/filmak.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/erabs', erabsController.list);
app.get('/api/erab/froga', erabsController.frogacreate);
app.get('/api/erab/:posta/:pass', erabsController.login);
app.post('/api/erabs', erabsController.create);
app.get('/api/filmak', filmakController.list);
app.post('/api/filmak', filmakController.create);
app.get('/api/iritziak', iritziakController.list);
app.post('/api/iritziak', iritziakController.create);

app.listen(3000, function() {
  console.log('Zerbitzaria prest...');
})