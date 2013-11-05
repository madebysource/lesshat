var assert = require('assert');

describe('skew', function() {

  it('should return default units and value', function(done) {
    test.resultProperty = 'transform';
    test.skew('20, 30', 'skew(20deg, 30deg)', done);
  });

});
