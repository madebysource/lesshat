var path = require('path');
var fs = require('fs');

module.exports = function (grunt) {
	grunt.registerTask('documentation', function () {
		var mixinsDir = path.resolve(__dirname, '..', 'mixins');
		var version = require(path.resolve(__dirname, '..', 'package.json')).version;
		
		// Check whether mixins folder exists
		if (!fs.existsSync(mixinsDir)) {
			grunt.fail.fatal('Mixins folder does not exist.');
		}
		var fileArray = [];
		
		fs.readdirSync(mixinsDir).sort().forEach(function (dir) {
			var mixin_path_noext = path.resolve(mixinsDir, dir, dir);
			grunt.log.writeln([mixin_path_noext, fs.existsSync(mixin_path_noext + '.md')]);
			if (fs.existsSync(mixin_path_noext + '.md')) {
				fileArray.push(fs.readFileSync(mixin_path_noext + '.md', 'utf8'));
			}
		});
		
		if (fs.existsSync(path.resolve(__dirname, '..', 'README-template.md'))) {
			var template = fs.readFileSync(path.resolve(__dirname, '..', 'README-template.md'), 'utf8');
			template =
				"<!---\n"  +
				"If you want to edit README file, please do it in README-template.md.\n" +
				"README.md file is automatically generated.\n" +
				"{{ documentation }} syntax is replaced by all mixins documentation from mixins folder\n" +
				"-->\n\n" + template;
			template = template.replace(/{{\s*documentation\s*}}$/gm, fileArray.join('\n'))
				.replace(/{{\s*version\s*}}/gm, version)
				.replace(/{{\s*date\s*}}/gm, '(' + grunt.template.today('yyyy-mm-dd') + ')');
			fs.writeFileSync(path.resolve(__dirname, '..', 'README.md'), template);
			grunt.log.ok('Documentation generated – DONE');
		} else {
			grunt.fail.fatal('README-template.md does not exist.');
		}
	});
};
