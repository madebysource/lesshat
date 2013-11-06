/**
 * UserSelect mixin
 */

var userSelect = function userSelect(value) {
  value = value || 'auto';

  return value;
};

/**
 * For which browsers is this mixin specified
 */

userSelect.vendors = ['webkit', 'moz', 'ms'];


/**
 * Export mixin
 */

module.exports = userSelect;