var assert = require('assert');

describe('animation-direction', function() {

  it('should return the same value', function(done) {
    test.animationDirection('reverse', 'reverse', done);
  });

  it('should return the same value', function(done) {
    test.animationDirection('reverse, alternate', 'reverse, alternate', done);
  });

});