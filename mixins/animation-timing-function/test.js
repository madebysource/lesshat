var assert = require('assert');

describe('animation-timing-function', function() {

  it('should return the same value', function(done) {
    test.animationTimingFunction('cubic-bezier(0.42,0,0.58,1)', 'cubic-bezier(0.42, 0, 0.58, 1)', done);
  });

  it('should return the same value', function(done) {
    test.animationTimingFunction('cubic-bezier(0.42,0,0.58,1), cubic-bezier(0.42,0,0.58,1)', 'cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1)', done);
  });

});