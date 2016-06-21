var path = require('path');

module.exports = function (grunt) {
	grunt.registerTask('mixins_update', function () {
		var mixinsDir = path.resolve(__dirname, '..', 'build', 'lesshat.less');
		var version = require(path.resolve(__dirname, '..', 'package.json')).version;

		if (grunt.file.exists(mixinsDir)) {
			var file = grunt.file.read(mixinsDir);
			file = file.replace(/{{\s*version\s*}}/, version + ' ' + '(' + grunt.template.today('yyyy-mm-dd') + ')');
			grunt.file.write(mixinsDir, file);
			grunt.log.ok('lesshat.less version changed!');
			grunt.log.ok('lesshat-prefixed.less version changed!');
		} else {
			grunt.fail.fatal('lesshat.less file not found');
		}
	});
};
