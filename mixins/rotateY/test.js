var assert = require('assert');

describe('rotateY', function() {

  it('should return value with units', function(done) {
    test.resultProperty = 'transform';
    test.rotateY('20', 'rotateY(20deg)', done);
  });

});
