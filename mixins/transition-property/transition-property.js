/**
 * TransitionProperty mixin
 */

var transitionProperty = function transitionProperty(value) {
  value = value || 'all';
  var prefixes = ['-webkit-', '-moz-', '-o-', ''];
  var prefixedProperties = ['column', 'transform', 'filter'];
  var subSplit = value.split(/(?:,)(?![^(]*\))/g);
  subSplit.forEach(function(css, index) {
    prefixedProperties.forEach(function(property) {
      if (css.indexOf(property) !== -1) {
        subSplit[index] = '';
        prefixes.forEach(function(vendor, i) {
          subSplit[index] += css.trim().replace(new RegExp(property, 'g'), function(match) {
            return vendor + match;
          });

          if (i < prefixes.length - 1) {
            subSplit[index] += ',';
          }
        });
      }
    });
  });

  value = subSplit.join(',');


  return value;
};

transitionProperty.webkit = function transitionProperty(value) {
  value = value || 'all';
  var prefixedProperties = ['background-size', 'border-radius', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-top-left-radius', 'border-top-right-radius', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-webkit-';

  if (/^[-a-zA-Z0-9().\/]*,/.test(value)) {
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

  if (/^[-a-zA-Z0-9().\/]*,/.test(value)) {
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

  if (/^[-a-zA-Z0-9().\/]*,/.test(value)) {
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
