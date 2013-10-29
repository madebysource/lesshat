/**
 * backgroundOrigin mixin
 */

var backgroundOrigin = function backgroundOrigin(value) {
  return value || 'padding-box';
};

/**
 * For which browsers is this mixin specified
 */

backgroundOrigin.vendors = ['webkit', 'moz'];

/**
 * Export mixin
 */

module.exports = backgroundOrigin;