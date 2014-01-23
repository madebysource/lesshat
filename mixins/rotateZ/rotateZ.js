/**
 * RotateZ mixin
 */

var rotateZ = function rotateZ(value) {
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

rotateZ.result = {
  property: 'transform',
  value: 'rotateZ({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

rotateZ.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = rotateZ;
