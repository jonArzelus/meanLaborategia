var Filma = require('../models/filmaDB');

module.exports.create = function (req, res) {
  var filma = new Filma(req.body);
  filma.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Filma.find({}, function (err, results) {
    res.json(results);
  });
}