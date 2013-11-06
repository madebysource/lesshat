/**
 * FlexWrap mixin
 */

var flexWrap = function flexWrap(value) {
  value = value || 'nowrap';

  return value;
};

/**
 * For which browsers is this mixin specified
 */

flexWrap.vendors = ['webkit','ms'];

/**
 * Export mixin
 */

module.exports = flexWrap;