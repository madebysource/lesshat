/**
 * AlignSelf (flexbox) mixin
 */

var alignSelf = function alignSelf(value) {
  value = value || 'auto';

  return value;
};

alignSelf.ms = function msalignSelf(value) {
  value = value || 'auto';

  if (value == 'flex-start') {
    value = 'start';
  } else if (value == 'flex-end') {
    value = 'end';
  }

  return value;
};

/**
 * Older syntax have different properties
 */

 alignSelf.result = {
  ms: {
    property: '-ms-flex-item-align',
    prefixed: false
  }
 };

/**
 * For which browsers is this mixin specified
 */

alignSelf.vendors = ['webkit','ms'];

/**
 * Export mixin
 */

module.exports = alignSelf;
