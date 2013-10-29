var assert = require('assert');

describe('columns', function() {

  it('should return the same value', function(done) {
    test.columns('200px 3', '200px 3', done);
  });

  it('should add default units and return same value', function(done) {
    test.columns('150 2', '150px 2', done);
  });

});