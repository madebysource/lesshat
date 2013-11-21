var assert = require('assert');

describe('contrast', function() {

  it('should add default unit and return the value', function(done) {
    test.resultProperty = 'filter';
    test.contrast('200', 'contrast(200%)', done);
  });

});
