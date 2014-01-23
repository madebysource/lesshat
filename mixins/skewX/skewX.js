/**
 * SkewX mixin
 */

var skewX = function skewX(value) {
  value = value || '0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%|\.)/gi;

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return (match == 0) && match || match + 'deg';
    });
  }

  return value;
};

/**
 * Result settings
 */

skewX.result = {
  property: 'transform',
  value: 'skewX({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

skewX.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = skewX;
