/**
 * Keyframes mixin
 */

var keyframes = function keyframes(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
  var selector = '@keyframes ';
  var definition = value.split(',');
  value = '0; } \n' + selector + definition[0] + '{' +  definition[1];

  return value;
};

keyframes.webkit = function keyframes(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
  var prefixedProperties = ['animation','background-size', 'border-', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-webkit-';
  var selector = '@-webkit-keyframes ';
  var definition = value.split(',');

  prefixedProperties.forEach(function(property, index) {
    if (value.indexOf(property) !== -1) {
      definition[1] = definition[1].replace(new RegExp(property, 'g'), function(match) {
        return prefix + match;
      })
    }
  });

  value = '0; } \n' + selector + definition[0] + '{' +  definition[1];

  return value;
};

keyframes.moz = function keyframes(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
  var prefixedProperties = ['animation','background-size', 'border-', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-moz-';
  var selector = '@-moz-keyframes ';
  var definition = value.split(',');

  prefixedProperties.forEach(function(property, index) {
    if (value.indexOf(property) !== -1) {
      definition[1] = definition[1].replace(new RegExp(property, 'g'), function(match) {
        return prefix + match;
      })
    }
  });

  value = '0; } \n' + selector + definition[0] + '{' +  definition[1];

  return value;
};

keyframes.opera = function keyframes(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
  var prefixedProperties = ['animation','background-size', 'border-', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-o-';
  var selector = '@-o-keyframes ';
  var definition = value.split(',');

  prefixedProperties.forEach(function(property, index) {
    if (value.indexOf(property) !== -1) {
      definition[1] = definition[1].replace(new RegExp(property, 'g'), function(match) {
        return prefix + match;
      })
    }
  });

  value = '0; } \n' + selector + definition[0] + '{' +  definition[1];

  return value;
};

keyframes.result = {
  property: 'lesshat-selector { pb',
  prefixed: false,
  strip: ';'
};

keyframes.appendCSS = {
  all: '}',
}

/**
 * For which browsers is this mixin specified
 */

keyframes.vendors = ['webkit','moz','opera'];

/**
 * Export mixin
 */

module.exports = keyframes;
