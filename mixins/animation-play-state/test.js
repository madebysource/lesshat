var assert = require('assert');

describe('animation-play-state', function() {

  it('should return the same value', function(done) {
    test.animationPlayState('running', 'running', done);
  });

  it('should return the default value running', function(done) {
    test.animationPlayState('', 'running', done);
  });


});