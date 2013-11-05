var assert = require('assert');

describe('translateZ', function() {

  it('should return default units and value', function(done) {
    test.resultProperty = 'transform';
    test.translateZ('20', 'translateZ(20px)', done);
  });

});
