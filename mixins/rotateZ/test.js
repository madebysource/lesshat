var assert = require('assert');

describe('rotateZ', function() {

  it('should return value with units', function(done) {
    test.resultProperty = 'transform';
    test.rotateZ('20', 'rotateZ(20deg)', done);
  });

});
