var assert = require('assert');

describe('transition-property', function() {

  it('should return the same value', function(done) {
    test.transitionProperty('box-shadow', 'box-shadow', done);
  });

  it('should prefix property and return value', function(done) {
    test.transitionProperty.webkit('box-shadow', '-webkit-box-shadow', done);
  });

});