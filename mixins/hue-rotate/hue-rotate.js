/**
 * HueRotate mixin
 */

var hueRotate = function hueRotate(value) {
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

hueRotate.result = {
  property: 'filter',
  value: 'hue-rotate({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

hueRotate.vendors = ['webkit', 'moz', 'ms'];

/**
 * Export mixin
 */

module.exports = hueRotate;
