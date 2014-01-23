var assert = require('assert');

describe('box-shadow', function() {

  it('should return the same value', function(done) {
    test.boxShadow('0 1px 10px rgba(20,20,20,0.5)', '0 1px 10px rgba(20, 20, 20, 0.5)', done);
  });

  it('should add px for numbers', function(done) {
    test.boxShadow('5 4 100 rgba(20,20,20,0.5)', '5px 4px 100px rgba(20, 20, 20, 0.5)', done);
  });

  it('should add px for numbers', function(done) {
    test.boxShadow('5 4 100 rgba(20,20,20,0.5), inset 5 4 100 rgba(20,20,20,0.5)', '5px 4px 100px rgba(20, 20, 20, 0.5), inset 5px 4px 100px rgba(20, 20, 20, 0.5)', done);
  });

  it('should return the same value', function(done) {
    test.boxShadow('0em 0.125em 0.3125em 0em rgba(0, 0, 0, 0.5)', '0em 0.125em 0.3125em 0em rgba(0, 0, 0, 0.5)', done);
  });

});
