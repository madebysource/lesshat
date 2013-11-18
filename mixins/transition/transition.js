/**
 * Transition mixin
 */

var transition = function transition(value) {
  value = value || 'all 0 ease 0';
  var prefixes = ['-webkit-', '-moz-', '-o-', ''];
  var prefixedProperties = ['column', 'transform', 'filter'];
  var valueRegex = /(?:\d)(?:ms|s)/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (/^[-a-zA-Z0-9().\/]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

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

  if (!valueRegex.test(value) && value !== '0') {
    value = value.replace(numWithoutValue, function(match) {

      if (parseFloat(match, 10) > 10) {
        match += 'ms';
      } else {
        match += 's';
      }

      return match;
    });
  }

  return value;
};

transition.webkit = function transition(value) {
  value = value || 'all 0 ease 0';
  var prefixedProperties = ['background-size', 'border-radius', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-top-left-radius', 'border-top-right-radius', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-webkit-';
  var valueRegex = /(?:\d)(?:ms|s)/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

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

  if (!valueRegex.test(value) && value !== '0') {
    value = value.replace(numWithoutValue, function(match) {

      if (parseFloat(match, 10) > 10) {
        match += 'ms';
      } else {
        match += 's';
      }

      return match;
    });
  }

  return value;
};

transition.moz = function transition(value) {
  value = value || 'all 0 ease 0';
  var prefixedProperties = ['background-size', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-moz-';
  var valueRegex = /(?:\d)(?:ms|s)/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

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

  if (!valueRegex.test(value) && value !== '0') {
    value = value.replace(numWithoutValue, function(match) {

      if (parseFloat(match, 10) > 10) {
        match += 'ms';
      } else {
        match += 's';
      }

      return match;
    });
  }

  return value;
};

transition.opera = function transition(value) {
  value = value || 'all 0 ease 0';
  var prefixedProperties = ['transform'];
  var prefix = '-o-';
  var valueRegex = /(?:\d)(?:ms|s)/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

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

  if (!valueRegex.test(value) && value !== '0') {
    value = value.replace(numWithoutValue, function(match) {

      if (parseFloat(match, 10) > 10) {
        match += 'ms';
      } else {
        match += 's';
      }

      return match;
    });
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

transition.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = transition;
