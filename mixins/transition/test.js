var assert = require('assert');

describe('transition', function() {

  it('should return the same value', function(done) {
    test.transition('box-shadow 0.2s cubic-bezier(.17,.67,.83,.67), transform 0.2s linear', 'box-shadow 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67),-webkit-transform 0.2s linear,-moz-transform 0.2s linear,-o-transform 0.2s linear,transform 0.2s linear', done);
  });

  it('should return the same value', function(done) {
    test.transition('box-shadow 0.2s linear, color .4s .2s ease', 'box-shadow 0.2s linear, color 0.4s 0.2s ease', done);
  });

  it('should return prefixed value', function(done) {
    test.transition.webkit('box-shadow .2 linear, filter .5 .2 ease', '-webkit-box-shadow 0.2s linear, -webkit-filter 0.5s 0.2s ease', done);
  });

  it('should return prefixed value', function(done) {
    test.transition.moz('box-shadow .2 linear, filter .5 .2 ease', '-moz-box-shadow 0.2s linear, -moz-filter 0.5s 0.2s ease', done);
  });

});
