var exec = require('child_process').exec;

module.exports = function (grunt) {
	grunt.registerTask('git', function () {
		var version = grunt.config('version').settings.version;
		var done = this.async();

		// git tag
		var gitCommit = 'git add .; git commit -m "Version %%%"'.replace('%%%', version);
		var gitTag = 'git tag -a v' + version + ' -m "Version %%%"'.replace('%%%', version);

		exec(gitCommit, function (error, stdout, stderr) {
			if (error !== null) {
				grunt.fail.warn('exec error: ' + error);
				return false;
			}
			exec(gitTag, function (error, stdout, stderr) {
				if (error !== null) {
					grunt.fail.warn('exec error: ' + error);
				}
				done();
			});
		});

		grunt.log.ok('Git tag added!');
	});
};
