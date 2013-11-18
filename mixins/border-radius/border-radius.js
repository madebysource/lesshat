/**
 * borderRadius mixin
 */

var borderRadius = function borderRadius(value) {
  value = value || '0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (/^[-a-zA-Z0-9().\/]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return match + 'px';
    });
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

borderRadius.vendors = ['webkit', 'moz'];

/**
 * Append CSS
 */

borderRadius.appendCSS = {
  all: 'background-clip: padding-box',
  webkit: '-webkit-background-clip: padding-box',
  moz: '-moz-background-clip: padding'
};

/**
 * Export mixin
 */

module.exports = borderRadius;
