var assert = require('assert');

describe('border-radius', function() {

  it('should return the same value', function(done) {
    test.borderRadius('10px', '10px', done);
  });

  it('should return numbers with px', function(done) {
    test.borderRadius('20 30', '20px 30px', done);
  });

});