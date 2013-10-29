var assert = require('assert');

describe('skewY', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.skewY('20', 'skewY(20deg)', done);
  });

});