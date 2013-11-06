var assert = require('assert');

describe('grayscale', function() {

  it('should add default unit and return the value', function(done) {
    test.resultProperty = 'filter';
    test.grayscale('50', 'grayscale(50%)', done);
  });

});