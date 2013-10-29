/**
 * backgroundClip mixin
 */

var backgroundClip = function backgroundClip(value) {
  return value || 'border-box';
};

/**
 * For which browsers is this mixin specified
 */

backgroundClip.vendors = ['webkit', 'moz'];

/**
 * Export mixin
 */

module.exports = backgroundClip;