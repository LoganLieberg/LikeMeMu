var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var bios = require('./rooots/bios');
var adam = require('./Likes/adam');

app.set('port', 3000);

//mount middleware
app.use(bodyParser.urlencoded({extended: true}));

//routes

//app.use('/data', data);
app.use('/Likes/adam', adam);
app.use('/bios', bios);
//catch all
app.get('/*', function(req, res) {
  console.log('request params', req.params);
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function () {
  console.log('Server is ready on port:' + app.get('port'));
});
