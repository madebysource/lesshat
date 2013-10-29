/**
 * Transform mixin
 */

var transform = function transform(value) {
  value = value || 'none';
  var functions = {
    translate: 'px',
    rotate: 'deg',
    rotate3d: 'deg',
    skew: 'deg'
  };

  if (/^\w*\(?[a-z0-9.]*\)?/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  for (var i in functions) {
    if (value.indexOf(i) >= 0) {
      // check if there is unit
      value = value.replace(new RegExp(i + '[\\w]?\\([a-z0-9, %]*\\)'), function(match) {
        var regex = /(\d+\.?\d*)(?!\w|%)/g;
        if (i == 'rotate3d') {
          regex = /,\s*\d+$/;
        }
        return match.replace(regex, function(innerMatch) {
          return innerMatch + functions[i];
        });
      });
    }
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

transform.vendors = ['webkit', 'moz', 'opera', 'ms'];


/**
 * Export mixin
 */

module.exports = transform;