/**
 * JustifyContent (flexbox) mixin
 */

var justifyContent = function justifyContent(value) {
  value = value || 'flex-start';

  return value;
};

justifyContent.oldestWebkit = function oldestWebkitjustifyContent(value) {
  value = value || 'start';

  if (value == 'flex-start') {
    value = 'start';
  }
  else if (value == 'flex-end') {
    value = 'end';
  }
  else if (value == 'space-between' || value == 'space-around') {
    value = 'justify';
  }

  return value;
};

justifyContent.moz = function mozjustifyContent(value) {
  value = value || 'start';

  if (value == 'flex-start') {
    value = 'start';
  }
  else if (value == 'flex-end') {
    value = 'end';
  }
  else if (value == 'space-between' || value == 'space-around') {
    value = 'justify';
  }

  return value;
};

justifyContent.ms = function msjustifyContent(value) {
  value = value || 'start';

  if (value == 'flex-start') {
    value = 'start';
  }
  else if (value == 'flex-end') {
    value = 'end';
  }
  else if (value == 'space-between') {
    value = 'justify';
  }
  else if (value == 'space-around') {
    value = 'distribute';
  }

  return value;
};

/**
 * Older syntax have different properties
 */

 justifyContent.result = {
  oldestwebkit: {
    property: '-webkit-box-pack',
    prefixed: false
  },
  moz: {
    property: '-moz-box-pack',
    prefixed: false
  },
  ms: {
    property: '-ms-flex-pack',
    prefixed: false
  }
 };

/**
 * For which browsers is this mixin specified
 */

justifyContent.vendors = ['oldestwebkit','moz','webkit','ms'];

/**
 * Export mixin
 */

module.exports = justifyContent;
