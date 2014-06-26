/**
 * RotateY mixin
 */

var rotateY = function rotateY(value) {
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

rotateY.result = {
  property: 'transform',
  value: 'rotateY({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

rotateY.vendors = ['webkit', 'moz', 'ms', 'opera'];

/**
 * Export mixin
 */

module.exports = rotateY;
