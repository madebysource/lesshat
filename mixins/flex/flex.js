/**
 * Flex mixin
 */

var flex = function flex(value) {
  value = value || '0 1 auto';

  if (/^[-a-zA-Z0-9().\/]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  return value;
};

flex.olderwebkit = function olderwebkitflex(value) {
  value = value.match(/^\d+/)[0] || '0';

  return value;
};

flex.moz = function mozflex(value) {
  value = value.match(/^\d+/)[0] || '0';

  return value;
};

/**
 * Older syntax have different properties
 */

flex.result = {
  olderwebkit: {
    property: '-webkit-box-flex',
    prefixed: false
  },
  moz: {
    property: '-moz-box-flex',
    prefixed: false
  },
};

/**
 * For which browsers is this mixin specified
 */

flex.vendors = ['olderwebkit','moz','webkit','ms'];

/**
 * Export mixin
 */

module.exports = flex;
