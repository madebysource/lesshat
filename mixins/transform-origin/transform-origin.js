/**
 * TransformOrigin mixin
 */

var transformOrigin = function transformOrigin(value) {
  value = value || '50% 50% 0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (/^[-a-zA-Z0-9().\/]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return match + '%';
    });
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

transformOrigin.vendors = ['webkit', 'moz', 'opera', 'ms'];


/**
 * Export mixin
 */

module.exports = transformOrigin;
