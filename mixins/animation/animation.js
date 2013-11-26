/**
 * Animation mixin
 */

var animation = function animation(value) {
  value = value || 'none';

  if (/^[^, ]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

animation.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = animation;
