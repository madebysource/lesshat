var assert = require('assert');

describe('animation-fill-mode', function() {

  it('should return the same value', function(done) {
    test.animationFillMode('forwards', 'forwards', done);
  });

  it('should return the same value', function(done) {
    test.animationFillMode('forwards, both', 'forwards, both', done);
  });

});