/**
 * borderTopLeftRadius mixin
 */

var borderTopLeftRadius = function borderTopLeftRadius(value) {
  value = value || '0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%|\.)/gi;

  if (/^[^, ]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return (match == 0) && match || match + 'px';
    });
  }

  return value;
};

/**
 * Syntax property for moz is non-standard
 */

borderTopLeftRadius.result = {
  moz: {
    property: 'border-radius-topleft',
  }
};

/**
 * For which browsers is this mixin specified
 */

borderTopLeftRadius.vendors = ['webkit', 'moz'];

/**
 * Append CSS
 */

borderTopLeftRadius.appendCSS = {
  all: 'background-clip: padding-box',
  webkit: '-webkit-background-clip: padding-box',
  moz: '-moz-background-clip: padding'
};

/**
 * Export mixin
 */

module.exports = borderTopLeftRadius;
