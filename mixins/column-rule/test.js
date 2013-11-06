var assert = require('assert');

describe('column-rule', function() {

  it('should return the same value', function(done) {
    test.columnRule('3px outset #ff00ff', '3px outset #ff00ff', done);
  });

  it('should add default unit and return the same value', function(done) {
    test.columnRule('5 outset #ff00ff', '5px outset #ff00ff', done);
  });

});