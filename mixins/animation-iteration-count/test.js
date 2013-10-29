var assert = require('assert');

describe('animation-iteration-count', function() {

  it('should return the same value', function(done) {
    test.animationIterationCount('3', '3', done);
  });

  it('should return the same value', function(done) {
    test.animationIterationCount('11, 44', '11, 44', done);
  });

});