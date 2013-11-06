var assert = require('assert');

describe('rotate3d', function() {

  it('should add unit for last number and return the value', function(done) {
    test.resultProperty = 'transform';
    test.rotate3d('1, 0, 0, 50', 'rotate3d(1, 0, 0, 50deg)', done);
  });

});