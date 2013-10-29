/**
 * TransformStyle mixin
 */

var transformStyle = function transformStyle(value) {
  value = value || 'flat';

  return value;
};

/**
 * For which browsers is this mixin specified
 */

transformStyle.vendors = ['webkit', 'moz', 'opera', 'ms'];


/**
 * Export mixin
 */

module.exports = transformStyle;