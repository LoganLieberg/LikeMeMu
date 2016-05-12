var express = require('express');
var router = express.Router();
var adamCounter = 0;

router.post('/',function(req,res) {
  res.send(adamCounter);
});

module.exports = router;
