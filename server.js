var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "./client/static")));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(bodyParser.json());

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require("./server/config/routes.js")(app);


var server = app.listen(80, function () {});
