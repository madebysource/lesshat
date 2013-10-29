/**
 * AlignContent (flexbox) mixin
 */

var alignContent = function alignContent(value) {
  value = value || 'stretch';

  return value;
};

alignContent.ms = function msalignContent(value) {
  value = value || 'stretch';

  if (value == 'flex-start') {
    value = 'start';
  } else if (value == 'flex-end') {
    value = 'end';
  } else if (value == 'space-between') {
    value = 'justify';
  } else if (value == 'space-around') {
    value = 'distribute';
  }

  return value;
};

/**
 * Older syntax have different properties
 */

alignContent.result = {
  ms: {
    property: '-ms-flex-line-pack',
    prefixed: false
  }
};

/**
 * For which browsers is this mixin specified
 */

alignContent.vendors = ['webkit', 'ms'];

/**
 * Export mixin
 */

module.exports = alignContent;