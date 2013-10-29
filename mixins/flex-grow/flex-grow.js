/**
 * FlexGrow mixin
 */

var flexGrow = function flexGrow(value) {
  value = value || '0';

  return value;
};

/**
 * For which browsers is this mixin specified
 */

flexGrow.vendors = ['webkit'];

/**
 * Export mixin
 */

module.exports = flexGrow;