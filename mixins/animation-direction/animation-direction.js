/**
 * animationDirection mixin
 */

var animationDirection = function animationDirection(value) {
  return value || 'normal';
};

/**
 * For which browsers is this mixin specified
 */

animationDirection.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = animationDirection;