/**
 * ScaleX mixin
 */

var scaleX = function scaleX(value) {
  value = value || '1';

  return value;
};

/**
 * Result settings
 */

scaleX.result = {
  property: 'transform',
  value: 'scaleX({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

scaleX.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = scaleX;