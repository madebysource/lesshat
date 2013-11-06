/**
 * FlexShrink mixin
 */

var flexShrink = function flexShrink(value) {
  value = value || '1';

  return value;
};

/**
 * For which browsers is this mixin specified
 */

flexShrink.vendors = ['webkit'];

/**
 * Export mixin
 */

module.exports = flexShrink;