var assert = require('assert');

describe('translateY', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.translateY('20', 'translateY(20px)', done);
  });

});