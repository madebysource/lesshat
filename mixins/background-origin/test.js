var assert = require('assert');

describe('background-origin', function() {

  it('should return the same value', function(done) {
    test.backgroundOrigin('content-box', 'content-box', done);
  });

});