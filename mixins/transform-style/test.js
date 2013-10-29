var assert = require('assert');

describe('transform-style', function() {

  it('should return the same value', function(done) {
    test.transformStyle('preserve-3d', 'preserve-3d', done);
  });

});