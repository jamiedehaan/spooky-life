const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    // console.log("==========")
    db.hauntedHouses
    .find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.hauntedHouses
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};