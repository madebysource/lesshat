var assert = require('assert');

describe('translateX', function() {

  it('should return default units and value', function(done) {
    test.resultProperty = 'transform';
    test.translateX('20', 'translateX(20px)', done);
  });

});
