/**
 * Translate3d mixin
 */

var translate3d = function translate3d(value) {
  value = value || '0, 0, 0';
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

translate3d.result = {
  property: 'transform',
  value: 'translate3d({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

translate3d.vendors = ['webkit', 'moz', 'ms', 'opera'];

/**
 * Export mixin
 */

module.exports = translate3d;
