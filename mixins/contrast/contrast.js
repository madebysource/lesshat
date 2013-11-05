/**
 * Contrast mixin
 */

var contrast = function contrast(value) {
  value = value || '100%';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return match + '%';
    });
  }

  return value;
};

/**
 * Result settings
 */

contrast.result = {
  property: 'filter',
  value: '~"contrast({{ escape_result }})"',
};

/**
 * For which browsers is this mixin specified
 */

contrast.vendors = ['webkit', 'moz', 'ms'];

/**
 * Export mixin
 */

module.exports = contrast;
