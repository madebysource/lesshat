var assert = require('assert');

describe('invert', function () {

  it('should add default units and return the value', function (done) {
    test.resultProperty = 'filter';
    test.invert('50', 'invert(50%)', done);
  });

});