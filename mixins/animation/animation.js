/**
 * Animation mixin
 */

var animation = function animation(value) {
  value = value || 'none';

  if (/^[-a-zA-Z0-9().\/]*,/.test(value)) {
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
