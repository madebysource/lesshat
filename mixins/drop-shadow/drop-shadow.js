/**
 * DropShadow mixin
 */

var dropShadow = function dropShadow(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
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
 * Result settings
 */

dropShadow.result = {
  property: 'filter',
  value: 'drop-shadow({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

dropShadow.vendors = ['webkit', 'moz', 'ms'];

/**
 * Export mixin
 */

module.exports = dropShadow;
