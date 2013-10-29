var assert = require('assert');

describe('translateZ', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.translateZ('20', 'translateZ(20px)', done);
  });

});