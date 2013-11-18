/**
 * boxShadow mixin
 */

boxShadow = function boxShadow(value) {
  value = value || '0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (/^[-a-zA-Z0-9().\/]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return match + 'px';
    });
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

boxShadow.vendors = ['webkit', 'moz'];

/**
 * Export mixin
 */

module.exports = boxShadow;
