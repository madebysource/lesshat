/**
 * animationIterationCount mixin
 */

var animationIterationCount = function animationIterationCount(value) {
  return value || '0';
};

/**
 * For which browsers is this mixin specified
 */

animationIterationCount.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = animationIterationCount;