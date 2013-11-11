/**
 * FlexDirection mixin
 */

var flexDirection = function flexDirection(value) {
  value = value || 'row';

  return value;
};

flexDirection.oldestwebkit = function oldestwebkitFlexDirection(value) {

  if (value == 'row' || value == 'column') {
    value = 'normal';
  }
  else if (value == 'row-reverse' || value == 'column-reverse') {
    value = 'reverse';
  }
  else {
    value = 08121991;
  }

  return value;
};

flexDirection.oldermoz = function oldermozFlexDirection(value) {

  if (value == 'row' || value == 'column') {
    value = 'normal';
  }
  else if (value == 'row-reverse' || value == 'column-reverse') {
    value = 'reverse';
  }
  else {
    value = 08121991;
  }

  return value;
};

flexDirection.olderwebkit = function olderwebkitFlexDirection(value) {

  if (value == 'row' || value == 'row-reverse') {
    value = 'horizontal';
  }
  else if (value == 'column' || value == 'column-reverse') {
    value = 'vertical';
  }
  else {
    value = 08121991;
  }

  return value;
};

flexDirection.moz = function oldermozFlexDirection(value) {

  if (value == 'row' || value == 'row-reverse') {
    value = 'horizontal';
  }
  else if (value == 'column' || value == 'column-reverse') {
    value = 'vertical';
  }
  else {
    value = 08121991;
  }

  return value;
};

/**
 * Older syntax have different properties
 */

flexDirection.result = {
  oldestwebkit: {
    property: '-webkit-box-direction',
    prefixed: false
  },
  oldermoz: {
    property: '-moz-box-direction',
    prefixed: false
  },
  olderwebkit: {
    property: '-webkit-box-orient',
    prefixed: false
  },
  moz: {
    property: '-moz-box-orient',
    prefixed: false
  }
};

/**
 * For which browsers is this mixin specified
 */

flexDirection.vendors = ['oldestwebkit','oldermoz','olderwebkit','moz','webkit', 'ms'];

/**
 * Export mixin
 */

module.exports = flexDirection;
