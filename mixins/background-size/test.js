var assert = require('assert');

describe('background-size', function() {

  it('should return the same value', function(done) {
    test.backgroundSize('cover 100%', 'cover 100%', done);
  });

  it('should return numbers with px', function(done) {
    test.backgroundSize('400 300', '400px 300px', done);
  });

  it('should return the same value', function(done) {
    test.backgroundSize('.25em cover', '0.25em cover', done);
  });

});
