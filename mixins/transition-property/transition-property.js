/**
 * TransitionProperty mixin
 */

var transitionProperty = function transitionProperty(value) {
  value = value || 'all';

  if (/^[-a-z0-9]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  return value;
};

transitionProperty.webkit = function transitionProperty(value) {
  value = value || 'all';
  var prefixedProperties = ['background-size', 'border-radius', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-top-left-radius', 'border-top-right-radius', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-webkit-';

  if (/^[-a-z0-9]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  prefixedProperties.forEach(function(property, index) {
    if (value.indexOf(property) !== -1) {
      value = value.replace(new RegExp(property, 'g'), function(match) {
        return prefix + match;
      })
    }
  });

  return value;
};

transitionProperty.moz = function transitionProperty(value) {
  value = value || 'all';
  var prefixedProperties = ['background-size', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-moz-';

  if (/^[-a-z0-9]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  prefixedProperties.forEach(function(property, index) {
    if (value.indexOf(property) !== -1) {
      value = value.replace(new RegExp(property, 'g'), function(match) {
        return prefix + match;
      })
    }
  });

  return value;
};

transitionProperty.opera = function transitionProperty(value) {
  value = value || 'all';
  var prefixedProperties = ['transform'];
  var prefix = '-o-';

  if (/^[-a-z0-9]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  prefixedProperties.forEach(function(property, index) {
    if (value.indexOf(property) !== -1) {
      value = value.replace(new RegExp(property, 'g'), function(match) {
        return prefix + match;
      })
    }
  });

  return value;
};

/**
 * For which browsers is this mixin specified
 */

transitionProperty.vendors = ['webkit', 'moz', 'opera'];


/**
 * Export mixin
 */

module.exports = transitionProperty;
