var path = require('path');
var suite = require('./test-suite');

var tester = new suite();

var buildPath = path.resolve(__dirname, '..', '..', 'build', 'lesshat.less');
tester.addBuildResult(buildPath);

global.test = tester;
