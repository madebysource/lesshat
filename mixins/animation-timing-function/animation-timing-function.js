/**
 * animationTimingFunction mixin
 */

var animationTimingFunction = function animationTimingFunction(value) {
  return value || 'ease';
};

/**
 * For which browsers is this mixin specified
 */

animationTimingFunction.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = animationTimingFunction;