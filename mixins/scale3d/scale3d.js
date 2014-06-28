/**
 * Scale3d mixin
 */

var scale3d = function scale3d(value) {
  value = value || '1, 1, 1';

  return value;
};

/**
 * Result settings
 */

scale3d.result = {
  property: 'transform',
  value: 'scale3d({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

scale3d.vendors = ['webkit', 'moz', 'ms', 'opera'];

/**
 * Export mixin
 */

module.exports = scale3d;
