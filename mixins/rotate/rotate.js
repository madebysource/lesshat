/**
 * Rotate mixin
 */

var rotate = function rotate(value) {
  value = value || '0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return match + 'deg';
    });
  }

  return value;
};

/**
 * Result settings
 */

rotate.result = {
  property: 'transform',
  value: 'rotate({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

rotate.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = rotate;
