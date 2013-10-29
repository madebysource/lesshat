var assert = require('assert');

describe('column-width', function() {

  it('should return the same value', function(done) {
    test.columnWidth('100px', '100px', done);
  });

  it('should add default unit and return the same value', function(done) {
    test.columnWidth('150', '150px', done);
  });

});