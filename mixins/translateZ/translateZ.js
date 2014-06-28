/**
 * TranslateZ mixin
 */

var translateZ = function translateZ(value) {
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

translateZ.result = {
  property: 'transform',
  value: 'translateZ({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

translateZ.vendors = ['webkit', 'moz', 'ms', 'opera'];

/**
 * Export mixin
 */

module.exports = translateZ;
