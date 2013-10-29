var assert = require('assert');

describe('sepia', function () {

  it('should add default units and return the value', function (done) {
    test.resultProperty = 'filter';
    test.sepia('50', 'sepia(50%)', done);
  });

});