var assert = require('assert');

describe('column-gap', function() {

  it('should return the same value', function(done) {
    test.columnGap('40px', '40px', done);
  });

  it('should add default unit and return the same value', function(done) {
    test.columnGap('22', '22px', done);
  });

});