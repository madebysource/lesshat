/**
 * animationFillMode mixin
 */

var animationFillMode = function animationFillMode(value) {
  return value || 'none';
};

/**
 * For which browsers is this mixin specified
 */

animationFillMode.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = animationFillMode;