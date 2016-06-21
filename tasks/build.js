var child_process = require('child_process');
var exec = child_process.exec;
var path = require('path');

module.exports = function (grunt) {

	grunt.registerTask('build', function () {
		var done = this.async();
		var buildFile = path.resolve(__dirname, 'src', 'build.js');
		var buildOutput = path.resolve(__dirname, '..', 'build', 'lesshat.less');
		var proc = exec('node ' + buildFile + ' > ' + buildOutput);

		proc.stderr.on('data', function (chunk) {
			// process.stderr.write(chunk);
			grunt.log.writeln(chunk);
		});

		proc.on('exit', function (code) {
			grunt.log.writeln('> ' + buildOutput);
			done(code === 0);
		});

		grunt.task.run('mixins_update');
		grunt.task.run('prefix');
	});

};
