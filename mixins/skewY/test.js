var assert = require('assert');

describe('skewY', function() {

  it('should return value with units', function(done) {
    test.resultProperty = 'transform';
    test.skewY('20', 'skewY(20deg)', done);
  });

});
