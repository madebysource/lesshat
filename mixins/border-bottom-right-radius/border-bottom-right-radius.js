/**
 * borderBottomRightRadius mixin
 */

var borderBottomRightRadius = function borderBottomRightRadius(value) {
  value = value || '0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (/^[-a-zA-Z0-9]*,/.test(value)) {
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

borderBottomRightRadius.vendors = ['webkit', 'moz'];

/**
 * Append CSS
 */

borderBottomRightRadius.appendCSS = {
  all: 'background-clip: padding-box',
  webkit: '-webkit-background-clip: padding-box',
  moz: '-moz-background-clip: padding'
};

/**
 * Export mixin
 */

module.exports = borderBottomRightRadius;