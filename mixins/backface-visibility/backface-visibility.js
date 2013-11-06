/**
 * backfaceVisibility mixin
 */

var backfaceVisibility = function backfaceVisibility(value) {
  return value || 'visible';
};

/**
 * For which browsers is this mixin specified
 */

backfaceVisibility.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = backfaceVisibility;