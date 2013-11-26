var assert = require('assert');

describe('perspective-origin', function() {

  it('should return the same value', function(done) {
    test.perspectiveOrigin('top left', 'top left', done);
  });

  it('should add percentage units and return the same value', function(done) {
    test.perspectiveOrigin('50 50', '50% 50%', done);
  });

  it('should return the same value', function(done) {
    test.perspectiveOrigin('50% 50%', '50% 50%', done);
  });

});
