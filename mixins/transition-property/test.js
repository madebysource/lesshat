var assert = require('assert');

describe('transition-property', function() {

  it('should return the same value', function(done) {
    test.transitionProperty('box-shadow, transform', 'box-shadow,-webkit-transform,-moz-transform,-o-transform,transform', done);
  });

  it('should prefix property and return value', function(done) {
    test.transitionProperty.webkit('box-shadow', '-webkit-box-shadow', done);
  });

  it('should prefix property and return value', function(done) {
    test.transitionProperty.webkit('box-shadow, transform', '-webkit-box-shadow, -webkit-transform', done);
  });

  it('should prefix property and return value', function(done) {
    test.transitionProperty.moz('box-shadow, transform', '-moz-box-shadow, -moz-transform', done);
  });

});
