/**
 * SkewY mixin
 */

var skewY = function skewY(value) {
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

skewY.result = {
  property: 'transform',
  value: 'skewY({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

skewY.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = skewY;
