
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//404 Page
app.use(function(req, res, next) {
	res.render('404.jade', {
		title: "404 - Pae Not Found",
		showFullNav: false,
		status: 404,
		url: req.url
	});
});

app.get('/', routes.index_compiled);
app.get('/_fetch', routes.index);
app.get('/work', routes.work_compiled);
app.get('/work_fetch', routes.work);
app.get('/blog', routes.blog_compiled);
app.get('/blog_fetch', routes.blog);
app.get('/resume', routes.resume_compiled);
app.get('/resume_fetch', routes.resume);
app.get('/work', routes.work);
app.get('/undefined_fetch', routes.blog);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
