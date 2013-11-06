/**
 * Rotate3d mixin
 */

var rotate3d = function rotate3d(value) {
  value = value || '0, 0, 0, 0';
  value = value.replace(/,\s*\d+$/, function(match) {
    return match + 'deg';
  });

  return value;
};

/**
 * Result settings
 */

rotate3d.result = {
  property: 'transform',
  value: 'rotate3d({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

rotate3d.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = rotate3d;