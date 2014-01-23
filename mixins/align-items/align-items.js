/**
 * AlignItems mixin
 */

var alignItems = function alignItems(value) {
  value = value || 'stretch';

  return value;
};

alignItems.olderwebkit = function olderWebkitalignItems(value) {
  value = value || 'stretch';

  if (value == 'flex-start') {
    value = 'start';
  }
  else if (value == 'flex-end') {
    value = 'end';
  }

  return value;
};

alignItems.moz = function mozalignItems(value) {
  value = value || 'stretch';

  if (value == 'flex-start') {
    value = 'start';
  }
  else if (value == 'flex-end') {
    value = 'end';
  }

  return value;
};

alignItems.ms = function msalignItems(value) {
  value = value || 'stretch';

  if (value == 'flex-start') {
    value = 'start';
  }
  else if (value == 'flex-end') {
    value = 'end';
  }

  return value;
};

/**
 * Older syntax have different properties
 */

 alignItems.result = {
  olderwebkit: {
    property: '-webkit-box-align',
    prefixed: false
  },
  moz: {
    property: '-moz-box-align',
    prefixed: false
  },
  ms: {
    property: '-ms-flex-align',
    prefixed: false
  }
 };

/**
 * For which browsers is this mixin specified
 */

alignItems.vendors = ['olderwebkit','moz','webkit','ms'];

/**
 * Export mixin
 */

module.exports = alignItems;
