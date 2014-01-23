/**
 * borderTopRightRadius mixin
 */

var borderTopRightRadius = function borderTopRightRadius(value) {
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

borderTopRightRadius.result = {
  moz: {
    property: 'border-radius-topright',
  }
};

/**
 * For which browsers is this mixin specified
 */

borderTopRightRadius.vendors = ['webkit', 'moz'];

/**
 * Append CSS
 */

borderTopRightRadius.appendCSS = {
  all: 'background-clip: padding-box',
  webkit: '-webkit-background-clip: padding-box',
  moz: '-moz-background-clip: padding'
};


/**
 * Export mixin
 */

module.exports = borderTopRightRadius;
