var assert = require('assert');

describe('translate3d', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.translate3d('20, 30, 10', 'translate3d(20px, 30px, 10px)', done);
  });

});