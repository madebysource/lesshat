var assert = require('assert');

describe('saturate', function () {

  it('should add default units and return the value', function (done) {
    test.resultProperty = 'filter';
    test.saturate('50', 'saturate(50%)', done);
  });

});