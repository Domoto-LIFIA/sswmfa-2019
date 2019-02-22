var express = require('express');
var router = express.Router();
var sequelize = require('../models/db');

router.get('/createTables', function(req, res){
  sequelize.sync({force: true});
  res.redirect('back');
});

module.exports = router;
