var assert = require('assert');

describe('transition-duration', function() {

  it('should add default unit and return the value', function(done) {
    test.transitionDuration('2', '2s', done);
  });

  it('should add default units and return the value', function(done) {
    test.transitionDuration('2, 130', '2s, 130ms', done);
  });

});