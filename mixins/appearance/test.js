var assert = require('assert');

describe('appearance', function() {

  it('should return the same value', function(done) {
    test.appearance('button', 'button', done);
  });

  it('should return the default value none', function(done) {
    test.appearance('', 'none', done);
  });

});