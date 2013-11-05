/**
 * Saturate mixin
 */

var saturate = function saturate(value) {
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

saturate.result = {
  property: 'filter',
  value: '~"saturate({{ escape_result }})"',
};

/**
 * For which browsers is this mixin specified
 */

saturate.vendors = ['webkit','moz','ms'];

/**
 * Export mixin
 */

module.exports = saturate;
