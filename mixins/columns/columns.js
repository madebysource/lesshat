/**
 * Columns mixin
 */

var columns = function columns(value) {
  value = value || 'auto auto';
  var numRegex = /^\d+$/;

  if (/^[^, ]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
    value = value.split(' ');
  }

  if (numRegex.test(value[0])) {
    value[0] = value[0] + 'px';
  }

  return value.join(' ');
};

/**
 * For which browsers is this mixin specified
 */

columns.vendors = ['webkit', 'moz'];


/**
 * Export mixin
 */

module.exports = columns;
