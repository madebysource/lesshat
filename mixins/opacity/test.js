var assert = require('assert');

describe('opacity', function() {

  it('should return the same value', function(done) {
    test.opacity('0.5', '0.5', done);
  });

  // Doesn't work now, because we set opacity.vendors.ms = false
  // it('should return filter property for IE', function(done) {
  //   test.resultProperty = 'filter';
  //   test.opacity('0.5', 'alpha(opacity=50)', done);
  // });

});