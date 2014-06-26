/**
 * Skew mixin
 */

var skew = function skew(value) {
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

skew.result = {
  property: 'transform',
  value: 'skew({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

skew.vendors = ['webkit', 'moz', 'ms', 'opera'];

/**
 * Export mixin
 */

module.exports = skew;
