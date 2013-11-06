var assert = require('assert');

describe('border-bottom-left-radius', function() {

  it('should return the same value', function(done) {
    test.borderBottomLeftRadius('10px', '10px', done);
  });

  it('should return numbers with px', function(done) {
    test.borderBottomLeftRadius('20', '20px', done);
  });

  it('should return numbers with px', function(done) {
    test.resultProperty = 'border-radius-bottomleft';
    test.borderBottomLeftRadius.moz('20', '20px', done);
  });

});
