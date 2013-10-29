/**
 * Order mixin
 */

var order = function order(value) {
  value = value || '0';

  return value;
};

/**
 * Older syntax have different properties
 */

order.result = {
  olderwebkit: {
    property: '-webkit-box-ordinal-group',
    prefixed: false
  },
  moz: {
    property: '-moz-box-ordinal-group',
    prefixed: false
  },
  ms: {
    property: '-ms-flex-order',
    prefixed: false
  }
};

/**
 * For which browsers is this mixin specified
 */

order.vendors = ['olderwebkit', 'moz', 'ms', 'webkit'];

/**
 * Export mixin
 */

module.exports = order;