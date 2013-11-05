/**
 * AnimationDelay mixin
 */

var animationDelay = function animationDelay(value) {
  value = value || '0';
  var valueRegex = /(?:\d)(?:ms|s)/gi;
  var numWithoutValue = /(?:\s|^)(\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (!valueRegex.test(value) && value !== '0') {
    value = value.replace(numWithoutValue, function(match) {

      if (parseFloat(match, 10) > 10) {
        match += 'ms';
      } else {
        match += 's';
      }

      return match;
    });
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

animationDelay.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = animationDelay;
