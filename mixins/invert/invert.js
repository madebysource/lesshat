/**
 * Invert mixin
 */

var invert = function invert (value) {
  value = value || '100%';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%|\.)/gi;

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return (match == 0) && match || match + '%';
    });
  }

  return value;
};

/**
 * Result settings
 */

invert.result = {
  property: 'filter',
  value: 'invert({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

invert.vendors = ['webkit','moz','ms'];

/**
 * Export mixin
 */

module.exports = invert;
