var assert = require('assert');

describe('animation-duration', function() {

  it('should return the same value', function(done) {
    test.animationDuration('2s', '2s', done);
  });

  it('should return the same value', function(done) {
    test.animationDuration('200ms, 400ms', '200ms, 400ms', done);
  });

  it('should return number with ms', function(done) {
    test.animationDuration('2000', '2000ms', done);
  });

  it('should return number with s', function(done) {
    test.animationDuration('5', '5s', done);
  });

});