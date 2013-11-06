var assert = require('assert');

describe('border-top-right-radius', function() {

  it('should return the same value', function(done) {
    test.borderTopRightRadius('10px', '10px', done);
  });

  it('should return numbers with px', function(done) {
    test.borderTopRightRadius('20', '20px', done);
  });

});