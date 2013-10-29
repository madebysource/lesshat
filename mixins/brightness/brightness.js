/**
 * Brightness mixin
 */

var brightness = function brightness(value) {
  value = value || '1';

  return value;
};

/**
 * Result settings
 */

brightness.result = {
  property: 'filter',
  value: 'brightness({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

brightness.vendors = ['webkit', 'moz', 'ms'];

/**
 * Export mixin
 */

module.exports = brightness;