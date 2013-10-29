var assert = require('assert');

describe('scaleX', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.scaleX('1.5', 'scaleX(1.5)', done);
  });

});