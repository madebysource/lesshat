/**
 * ScaleY mixin
 */

var scaleY = function scaleY(value) {
  value = value || '1';

  return value;
};

/**
 * Result settings
 */

scaleY.result = {
  property: 'transform',
  value: 'scaleY({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

scaleY.vendors = ['webkit', 'moz', 'ms', 'opera'];

/**
 * Export mixin
 */

module.exports = scaleY;
