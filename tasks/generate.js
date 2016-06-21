var fs = require('fs');
var path = require('path');

module.exports = function (grunt) {
	grunt.registerTask('generator', function () {

		var config = grunt.config('generator.settings');
		var mixinsDir = path.resolve(__dirname, '..', 'mixins');

		// Check whether mixins folder exists
		if (!fs.existsSync(mixinsDir)) {
			grunt.fail.fatal('Mixins folder does not exist. Try to install the whole workflow again,\nor send issue on github.');
		}

		// Check whether concrete mixin folder exists
		if (fs.existsSync(path.resolve(mixinsDir, config.mixin_css_name))) {
			grunt.fail.fatal(config.mixin_css_name + ' folder already exists. Choose another name.');
		}

		// Create folder
		var folder = fs.mkdirSync(path.resolve(mixinsDir, config.mixin_css_name));
		grunt.log.ok('Folder created – DONE');

		// Create files inside folder
		var srcDir = path.resolve(__dirname, 'src');

		// Check whether mixin template exists
		if (fs.existsSync(path.resolve(srcDir, 'mixin-template.js'))) {
			grunt.fail.fatal('Mixin template does not exist. Try to install the whole workflow again,\nor send issue on github.');
		}

		function fileCreator(mixin_name, data, exported, done) {
			done = done || function(){};
			if (mixin_name) {
				var mixinTemplatePath = path.resolve(srcDir, mixin_name + '.js');
				var mixinFile = fs.readFileSync(mixinTemplatePath, 'utf8');

				mixinFile = mixinFile.replace(/{{\s*(\w+\s*\|?\s*\w+)\s*}}/g, function (match, variable) {
					return (!(config[variable] instanceof Array) && (config[variable])) || (JSON.stringify(data[variable]).replace(/"/g, '\''));
				});
			}
			fs.writeFileSync(path.resolve(mixinsDir, exported.path, exported.file), mixinFile || '##');

			done();
		}

		fileCreator('mixin-template', config, {
			path: config.mixin_css_name,
			file: config.mixin_css_name + '.js'
		}, function () {
			grunt.log.ok('Mixin file created – DONE');
		});

		fileCreator('test-template', config, {
			path: config.mixin_css_name,
			file: 'test.js'
		}, function () {
			grunt.log.ok('Test file created – DONE');
		});

		fileCreator('documentation-template', config, {
			path: config.mixin_css_name,
			file: config.mixin_css_name + '.md'
		}, function () {
			grunt.log.ok('Document file created – DONE');
		});
	});
};
