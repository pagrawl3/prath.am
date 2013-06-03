
/*
 * GET home page.
 */

exports.index_compiled = function(req, res){
	res.render('index_compiled', { title: 'Hello World!' });
};

exports.resume_compiled = function(req, res){
	res.render('resume_compiled', { title: 'Hello World!' });
};

exports.blog_compiled = function(req, res){
	res.render('blog_compiled', { title: 'Hello World!' });
};

exports.index = function(req, res){
	var pathToTemplate = require('path').resolve(__dirname, '../views') + '/index.jade';
	var jade = require('jade');
	var template = require('fs').readFileSync(pathToTemplate, 'utf8');
	var jadeFn = jade.compile(template, { filename: pathToTemplate, pretty: true });
	var renderedTemplate = jadeFn();
	res.send({
		"success"	: true,
		"data"		: renderedTemplate
	});
};

exports.resume = function(req, res){
	var pathToTemplate = require('path').resolve(__dirname, '../views') + '/resume.jade';
	var jade = require('jade');
	var template = require('fs').readFileSync(pathToTemplate, 'utf8');
	var jadeFn = jade.compile(template, { filename: pathToTemplate, pretty: true });
	var renderedTemplate = jadeFn();
	res.send({
		"success"	: true,
		"data"		: renderedTemplate
	});
};