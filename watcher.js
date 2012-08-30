var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');



var TEMPLATE = './index.template.html';
var TARGET = './index.html';
var DATA = './docs.js';
var watchOpt = {interval: 10};

var cb = function(curr, prev) {
    if (curr && prev &&  curr.mtime <= prev.mtime) {
		return;
    }

	var index = fs.readFileSync(TEMPLATE, 'UTF-8');

	var template = handlebars.compile(index);

	// invalidate require cache
	if (require.cache[path.join(__dirname, DATA)]) {
		delete require.cache[path.join(__dirname, DATA)];
	}

	var docs = require(DATA);

	var result = template(docs);

	fs.writeFileSync(TARGET, result, 'UTF-8');

	console.log('Compiled.');
 };

fs.watchFile(TEMPLATE, watchOpt, cb);
fs.watchFile(DATA, watchOpt, cb);
cb();

console.log('Watching ' + TEMPLATE + ' and ' + DATA);
