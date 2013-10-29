var assert = require('assert');

describe('rotateZ', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.rotateZ('20', 'rotateZ(20deg)', done);
  });

});