var assert = require('assert');

describe('drop-shadow', function() {

  it('should add default unit and return the value', function(done) {
    test.resultProperty = 'filter';
    test.dropShadow('16 16 10 black', 'drop-shadow(16px 16px 10px #000000)', done);
  });

});