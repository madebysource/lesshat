var assert = require('assert');

describe('translate', function() {

  it('should return default units and value', function(done) {
    test.resultProperty = 'transform';
    test.translate('20', 'translate(20px)', done);
  });

});
