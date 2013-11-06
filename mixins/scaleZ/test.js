var assert = require('assert');

describe('scaleZ', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.scaleZ('1.5', 'scaleZ(1.5)', done);
  });

});