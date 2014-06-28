/**
 * Translate mixin
 */

var translate = function translate(value) {
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

translate.result = {
  property: 'transform',
  value: 'translate({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

translate.vendors = ['webkit', 'moz', 'ms', 'opera'];

/**
 * Export mixin
 */

module.exports = translate;
