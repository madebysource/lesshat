var assert = require('assert');

describe('border-top-left-radius', function() {

  it('should return the same value', function(done) {
    test.borderTopLeftRadius('10px', '10px', done);
  });

  it('should return numbers with px', function(done) {
    test.borderTopLeftRadius('20', '20px', done);
  });

});