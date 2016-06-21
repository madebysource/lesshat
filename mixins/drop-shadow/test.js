var assert = require('assert');

describe('drop-shadow', function() {

  it('should add default unit and return the color value', function(done) {
    test.resultProperty = 'filter';
    test.dropShadow('16 16 10 black', 'drop-shadow(16px 16px 10px black)', done);
  });

  it('should add default unit and return the hex value', function(done) {
    test.resultProperty = 'filter';
    test.dropShadow('16 16 10 #000', 'drop-shadow(16px 16px 10px #000)', done);
  });

});