var assert = require('assert');

describe('animation-delay', function() {

  it('should return the same value', function(done) {
    test.animationDelay('2s, 4s', '2s, 4s', done);
  });

  it('should return the same value', function(done) {
    test.animationDelay('200ms', '200ms', done);
  });

  it('should return numbers with second and milisecond value', function(done) {
    test.animationDelay('9, 200', '9s, 200ms', done);
  });

  it('should return the same value', function(done) {
    test.animationDelay('.2s', '0.2s', done);
  });

  it('should add unit and return the same value', function(done) {
    test.animationDelay('.2', '0.2s', done);
  });

});
