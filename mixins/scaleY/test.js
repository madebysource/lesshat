var assert = require('assert');

describe('scaleY', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.scaleY('1.5', 'scaleY(1.5)', done);
  });

});