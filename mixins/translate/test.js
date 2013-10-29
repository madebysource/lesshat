var assert = require('assert');

describe('translate', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.translate('20', 'translate(20px)', done);
  });

});