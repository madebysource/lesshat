var assert = require('assert');

describe('backface-visibility', function() {

  it('should return the same value', function(done) {
    test.backfaceVisibility('hidden', 'hidden', done);
  });

});