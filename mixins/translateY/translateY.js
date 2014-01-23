/**
 * TranslateY mixin
 */

var translateY = function translateY(value) {
  value = value || '0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%|\.)/gi;

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return (match == 0) && match || match + 'px';
    });
  }

  return value;
};

/**
 * Result settings
 */

translateY.result = {
  property: 'transform',
  value: 'translateY({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

translateY.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = translateY;
