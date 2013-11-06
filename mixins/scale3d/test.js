var assert = require('assert');

describe('scale3d', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.scale3d('1.5, .2, 3', 'scale3d(1.5, 0.2, 3)', done);
  });

});