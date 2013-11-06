/**
 * animationName mixin
 */

var animationName = function animationName(value) {
  return value || 'none';
};

/**
 * For which browsers is this mixin specified
 */

animationName.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = animationName;