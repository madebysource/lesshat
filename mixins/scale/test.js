var assert = require('assert');

describe('scale', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.scale('1.5', 'scale(1.5)', done);
  });

});