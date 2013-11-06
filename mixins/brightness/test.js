var assert = require('assert');

describe('brightness', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'filter';
    test.brightness('.5', 'brightness(0.5)', done);
  });

});