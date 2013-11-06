var assert = require('assert');

describe('hue-rotate', function () {

  it('should add default unit and return the value', function (done) {
    test.resultProperty = 'filter';
    test.hueRotate('50', 'hue-rotate(50deg)', done);
  });

});