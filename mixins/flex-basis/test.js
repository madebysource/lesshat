var assert = require('assert');

describe('flex-basis', function () {

  it('should add unit and return same value', function (done) {
    test.flexBasis('100', '100px', done);
  });

});