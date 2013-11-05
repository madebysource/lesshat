/**
 * Blur mixin
 */

var blur = function blur(value) {
  value = value || '0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return match + 'px';
    });
  }

  return value;
};

/**
 * Result settings
 */

blur.result = {
  property: 'filter',
  value: 'blur({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

blur.vendors = ['webkit', 'moz', 'ms'];

/**
 * Export mixin
 */

module.exports = blur;
