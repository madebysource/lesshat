var assert = require('assert');

describe('filter', function() {

  it('should return the same value', function(done) {
    test.filter('grayscale(0.5) blur(10px)', 'grayscale(0.5) blur(10px)', done);
  });

});