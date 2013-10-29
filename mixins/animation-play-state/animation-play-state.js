/**
 * animationPlayState mixin
 */

var animationPlayState = function animationPlayState(value) {
  return value || 'running';
};

/**
 * For which browsers is this mixin specified
 */

animationPlayState.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = animationPlayState;