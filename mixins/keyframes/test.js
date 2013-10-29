var assert = require('assert');

describe('keyframes', function () {

  it('should return the same value', function (done) {
    test.rootSelector = true;
    test.keyframes('animationName, 100%{ color: blue }', 'animationName{ 100%{ color: blue }', done);
  });

});