/**
 * ScaleZ mixin
 */

var scaleZ = function scaleZ(value) {
  value = value || '1';

  return value;
};

/**
 * Result settings
 */

scaleZ.result = {
  property: 'transform',
  value: 'scaleZ({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

scaleZ.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = scaleZ;