var express = require('express');
var router = express.Router();
var memberss = require("../data");
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Exam Question Performance' });
});

router.get('/jadeDemo', function(req, res) {
  res.render('jadeFileForExercise.jade', { introText: 'Create the Table here',members: memberss});
});
router.get('/json', function(req, res) {
    res.json(memberss);
});

module.exports = router;
