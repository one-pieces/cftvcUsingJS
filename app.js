var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();
var server = require('http').createServer(app);

app.set('port', process.env.PORT || 5800);
app.set('views', __dirname + '/app');
app.engine('.html', ejs.__express);
app.set('view engine', 'html'); //替换文件扩展名ejs为html

app.use(express.static(path.join(__dirname, 'app')));

app.get('/cftvc*', function(req, res) {
	res.render('index.html');
});

server.listen(app.get('port'), function() {
	console.log('cftvc is listening port ' + app.get('port'));
});