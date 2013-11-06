/**
 * Opacity mixin
 */

var opacity = function opacity(value) {
  value = value || '1';

  return value;
};

opacity.ms = function opacity(value) {
  value = value || 'filter: alpha(opacity=100)';

  return 'alpha(opacity=' + Math.floor(value * 100) + ')';
};

/**
 * Result settings
 */

opacity.result = {
  ms: {
    property: 'filter',
    prefixed: false,
  }
}

/**
 * PrependCSS
 */

opacity.prependCSS = {
  ms: 'zoom: 1',
};

/**
 * For which browsers is this mixin specified
 */

opacity.vendors = ['ms', 'webkit', 'moz'];

// Don't want ms filter syntax by default
opacity.vendors.ms = false;

/**
 * Export mixin
 */

module.exports = opacity;