var assert = require('assert');

describe('perspective', function() {

  it('should return the same value', function(done) {
    test.perspective('500px', '500px', done);
  });

  it('should add default unit and return the same value', function(done) {
    test.perspective('1000', '1000px', done);
  });

});