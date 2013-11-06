var assert = require('assert');

describe('blur', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'filter';
    test.blur('10', 'blur(10px)', done);
  });

});