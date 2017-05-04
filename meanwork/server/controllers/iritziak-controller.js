var Iritzia = require('../models/iritziaDB');

module.exports.create = function (req, res) {
  var iritzia = new Iritzia(req.body);
  iritzia.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Iritzia.find({}, function (err, results) {
    res.json(results);
  });
}