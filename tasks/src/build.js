var fs = require('fs');
var path = require('path');
var LESSGenerator = require('./less-generator');
var MixinLoader = require('./mixin-loader');
var mixinsDir = path.resolve(__dirname, '..', '..', 'mixins');

var chunks = [];

var headerPath = path.resolve(mixinsDir, 'header.less');
if (fs.existsSync(headerPath)) {
	var header = fs.readFileSync(headerPath, 'utf8');
	header += '\n// TABLE OF MIXINS:\n';
}

var loader = new MixinLoader(mixinsDir);
var mixinDescription = loader.getMixinDescriptors();

mixinDescription.forEach(function (desc) {
	switch (desc.type) {
		case 'less':
			var less = fs.readFileSync(desc.path, 'utf8');
			less = less.trim();
			chunks.push(less);
			break;
		
		case 'js':
			var mixin = require(desc.path);
			var generator = new LESSGenerator(mixin, desc.key, desc);
			chunks.push(generator.generate());
			break;
	}
	header += '\t// ' + desc.key + '\n';
});

chunks.unshift(header.trim());

var footer = path.resolve(mixinsDir, 'footer.less');
if (fs.existsSync(footer)) {
	var footer = fs.readFileSync(footer, 'utf8');
	chunks.push(footer.trim());
}

console.log(chunks.join('\n\n'));
