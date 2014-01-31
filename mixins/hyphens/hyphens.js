/**
 * Hyphens mixin
 */

var hyphens = function hyphens(value) {
  value = value || 'manual';

  return value;
};

/**
 * For which browsers is this mixin specified
 */

hyphens.vendors = ['webkit','moz','ms'];

/**
 * Export mixin
 */

module.exports = hyphens;