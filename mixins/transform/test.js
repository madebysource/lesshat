var assert = require('assert');

describe('transform', function() {

  it('should return the same value with units', function(done) {
    test.transform('scale(.5) translate(10, 20)', 'scale(0.5) translate(10px, 20px)', done);
  });

});
