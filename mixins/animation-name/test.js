var assert = require('assert');

describe('animation-name', function() {

  it('should return the same value', function(done) {
    test.animationName('brutalAnimation', 'brutalAnimation', done);
  });

  it('should return the same value', function(done) {
    test.animationName('anim-1, anim-2, anim-3', 'anim-1, anim-2, anim-3', done);
  });

});