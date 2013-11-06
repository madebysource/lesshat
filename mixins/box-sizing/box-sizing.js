/**
 * BoxSizing mixin
 */

var boxSizing = function boxSizing(value) {
  value = value || 'content-box';

  return value;
};

/**
 * For which browsers is this mixin specified
 */

boxSizing.vendors = ['webkit', 'moz'];


/**
 * Export mixin
 */

module.exports = boxSizing;