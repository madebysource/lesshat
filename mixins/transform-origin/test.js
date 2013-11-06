var assert = require('assert');

describe('transform-origin', function() {

  it('should return the same value', function(done) {
    test.transformOrigin('-10em -30em', '-10em -30em', done);
  });

  it('should add default unit and return the same value', function(done) {
    test.transformOrigin('50 50', '50% 50%', done);
  });

});