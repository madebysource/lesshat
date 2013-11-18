var assert = require('assert');

describe('border-image', function() {

  it('should return the same value', function(done) {
    test.borderImage('url(border.png) 61 45 62 54 repeat', 'url(border.png) 61 45 62 54 repeat', done);
  });

  it('should return the same value', function(done) {
    test.borderImage('url(../images/border.png) 61 45 62 54 repeat', 'url(../images/border.png) 61 45 62 54 repeat', done);
  });

});
