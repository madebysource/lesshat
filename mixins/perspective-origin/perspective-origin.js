/**
 * PerspectiveOrigin mixin
 */

var perspectiveOrigin = function perspectiveOrigin(value) {
  value = value || '50% 50%';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%|\.)/gi;

  if (/^[^, ]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return (match == 0) && match || match + '%';
    });
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

perspectiveOrigin.vendors = ['webkit', 'moz'];


/**
 * Export mixin
 */

module.exports = perspectiveOrigin;
