var assert = require('assert');

describe('transition-delay', function() {

  it('should return the same value', function(done) {
    test.transitionDelay('2s, 4s', '2s, 4s', done);
  });

  it('should return the same value', function(done) {
    test.transitionDelay('200ms', '200ms', done);
  });

  it('should return numbers with properly value', function(done) {
    test.transitionDelay('9, 200', '9s, 200ms', done);
  });

});
