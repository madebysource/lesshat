var assert = require('assert');

describe('border-bottom-right-radius', function() {

  it('should return the same value', function(done) {
    test.borderBottomRightRadius('10px', '10px', done);
  });

  it('should return numbers with px', function(done) {
    test.borderBottomRightRadius('20', '20px', done);
  });

});