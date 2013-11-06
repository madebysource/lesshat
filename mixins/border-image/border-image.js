/**
 * borderImage mixin
 */

var borderImage = function borderImage(value) {
  value = value || 08121991;

  if (/^[a-z(.)]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

borderImage.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = borderImage;
