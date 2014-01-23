/**
 * ColumnWidth mixin
 */

var columnWidth = function columnWidth(value) {
  value = value || 'auto';
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
 * For which browsers is this mixin specified
 */

columnWidth.vendors = ['webkit', 'moz'];


/**
 * Export mixin
 */

module.exports = columnWidth;
