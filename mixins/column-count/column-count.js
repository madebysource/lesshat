/**
 * ColumnCount mixin
 */

var columnCount = function columnCount(value) {
  value = value || 'auto';

  return value;
};

/**
 * For which browsers is this mixin specified
 */

columnCount.vendors = ['webkit', 'moz'];


/**
 * Export mixin
 */

module.exports = columnCount;