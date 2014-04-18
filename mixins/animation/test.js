var assert = require('assert');


describe('animation', function() {

  it('should add zero before dot and return the same value', function(done) {
    test.animation('nameAnimation .2s', 'nameAnimation 0.2s', done);
  });

  it('should return the same value', function(done) {
    test.animation('nameAnimation 2s linear alternate, nameAnimation2 1s linear alternate', 'nameAnimation 2s linear alternate, nameAnimation2 1s linear alternate', done);
  });

});
