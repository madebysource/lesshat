/**
 * ColumnGap mixin
 */

var columnGap = function columnGap(value) {
  value = value || 'normal';
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

columnGap.vendors = ['webkit', 'moz'];


/**
 * Export mixin
 */

module.exports = columnGap;
