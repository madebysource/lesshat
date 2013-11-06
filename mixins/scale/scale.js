/**
 * Scale mixin
 */

var scale = function scale(value) {
  value = value || '1';

  return value;
};

/**
 * Result settings
 */

scale.result = {
  property: 'transform',
  value: 'scale({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

scale.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = scale;