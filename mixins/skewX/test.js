var assert = require('assert');

describe('skewX', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.skewX('20', 'skewX(20deg)', done);
  });

});