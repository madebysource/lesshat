"use strict";

//@constructor
var Jsonp = function(opt)
{
	this.counter = 0;
	this.callback = opt.callback || function(){};
};
Jsonp.prototype.get = function(url)
{
	var context = this;
	var func = 'callback' + this.counter ++;
	window[func] = function(data)
	{
		context.callback(data);
		try {
			delete window[func];
		} catch(e) {}
		window[func] = null;
	};

	var $script =
	$('<script>')
		.attr({
			'src': url + '&callback=' + func,
			'async': true
		});
	
	$script.appendTo('head');
};

