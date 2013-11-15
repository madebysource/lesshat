var assert = require('assert');

describe('transition-property', function() {

  it('should return the same value', function(done) {
    test.transitionProperty('box-shadow, transform', 'box-shadow,-webkit-transform,-moz-transform,-o-transform,transform', done);
  });

  it('should prefix property and return value', function(done) {
    test.transitionProperty.webkit('box-shadow', '-webkit-box-shadow', done);
  });

});
