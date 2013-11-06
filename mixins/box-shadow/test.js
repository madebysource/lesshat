var assert = require('assert');

describe('box-shadow', function() {

  it('should return the same value', function(done) {
    test.boxShadow('0 1px 10px rgba(20,20,20,0.5)', '0px 1px 10px rgba(20, 20, 20, 0.5)', done);
  });

  it('should add px for numbers', function(done) {
    test.boxShadow('5 4 100 rgba(20,20,20,0.5)', '5px 4px 100px rgba(20, 20, 20, 0.5)', done);
  });

});