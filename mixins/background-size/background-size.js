/**
 * backgroundSize mixin
 */

var backgroundSize = function backgroundSize(value) {
  value = value || 'auto auto';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%|\.)/gi;

  if (/^[^, ]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return (match == 0) && match || match + 'px';
    });
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

backgroundSize.vendors = ['webkit', 'moz'];

/**
 * Export mixin
 */

module.exports = backgroundSize;
