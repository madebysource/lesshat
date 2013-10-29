var assert = require('assert');

describe('rotateY', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.rotateY('20', 'rotateY(20deg)', done);
  });

});