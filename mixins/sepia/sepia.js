/**
 * Sepia mixin
 */

var sepia = function sepia(value) {
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

sepia.result = {
  property: 'filter',
  value: 'sepia({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

sepia.vendors = ['webkit','moz','ms'];

/**
 * Export mixin
 */

module.exports = sepia;
