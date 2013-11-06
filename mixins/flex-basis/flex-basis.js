/**
 * FlexBasis mixin
 */

var flexBasis = function flexBasis(value) {
  value = value || 'auto';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

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

flexBasis.vendors = ['webkit'];

/**
 * Export mixin
 */

module.exports = flexBasis;
