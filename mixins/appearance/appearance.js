/**
 * appearance mixin
 */

var appearance = function appearance(value) {
  return value || 'none';
};

/**
 * For which browsers is this mixin specified
 */

appearance.vendors = ['webkit', 'moz'];

/**
 * Export mixin
 */

module.exports = appearance;