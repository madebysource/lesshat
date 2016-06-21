var exec = require('child_process').exec;
var path = require('path');

module.exports = function (grunt) {


	grunt.registerTask('test', function () {
		var done = this.async();
		var mixinsDir = path.resolve(__dirname, '..', 'mixins');
		var setupFile = path.resolve(__dirname, 'src', 'test-env.js');

		var listTests = exec('find ' + mixinsDir + ' -name test.js');
		var test_list_data = '';
		listTests.stdout.on('data', function (chunk) {
			test_list_data += chunk;
		});
		
		listTests.stderr.on('data', function (chunk) {
			process.stderr.write(chunk);
		});
		
		listTests.on('exit', function (code) {
			if (code !== 0) {
				return done(false);
			}

			var test_list = test_list_data.trim().split(/\r?\n/);
			var args = ('-c -R spec -s 1000 -r ' + setupFile).split(' ');
			args = args.concat(test_list);

			grunt.log.writeln('$ mocha ' + args.join(' '));

			var proc = exec(path.resolve(__dirname, '..', 'node_modules', '.bin', 'mocha') + ' ' + args.join(' '));
			proc.stdout.on('data', function (chunk) {
				process.stdout.write(chunk);
			});

			proc.stderr.on('data', function (chunk) {
				process.stdout.write(chunk);
			});

			proc.on('exit', function (code) {
				done(code === 0);
			});
		});
	});
};
