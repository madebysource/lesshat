/**
 * RotateX mixin
 */

var rotateX = function rotateX(value) {
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

rotateX.result = {
  property: 'transform',
  value: 'rotateX({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

rotateX.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = rotateX;
