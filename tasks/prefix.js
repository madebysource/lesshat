var path = require('path');
var fs = require('fs');

module.exports = function (grunt) {
	grunt.registerTask('prefix', function () {
		var buildDir = path.resolve(__dirname, '..', 'build');
		// Check whether build folder exists
		if (!fs.existsSync(buildDir)) {
			grunt.fail.fatal('Mixins folder does not exist.');
		}
		// Check whether lesshat.less exists
		if (!fs.existsSync(path.resolve(buildDir, 'lesshat.less'))) {
			grunt.fail.fatal('Mixin template does not exist.');
		}
		var mixins = fs.readFileSync(path.resolve(buildDir, 'lesshat.less'), 'utf8');
		mixins = mixins.replace(/^\.([a-z0-9-]+\([a-z@., 0-9-]+)/gmi, function (match, sub_1) {
			return '.lh-' + sub_1;
		});
		fs.writeFileSync(path.resolve(buildDir, 'lesshat-prefixed.less'), mixins);

		grunt.log.ok('Prefixed version – DONE');
	});
};
