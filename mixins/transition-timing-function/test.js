var assert = require('assert');

describe('transition-timing-function', function() {

  it('should return the same value', function(done) {
    test.transitionTimingFunction('cubic-bezier(0,0,1,1), ease', 'cubic-bezier(0, 0, 1, 1), ease', done);
  });

});