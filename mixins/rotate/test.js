var assert = require('assert');

describe('rotate', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.rotate('20', 'rotate(20deg)', done);
  });

});