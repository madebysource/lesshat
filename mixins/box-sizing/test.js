var assert = require('assert');

describe('box-sizing', function() {

  it('should return the same value', function(done) {
    test.boxSizing('border-box', 'border-box', done);
  });

});