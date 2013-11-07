/**
 * Keyframes mixin
 */

var keyframes = function keyframes(value) {

  // States
  // 1 - all
  // 2 - webkit, moz, w3c
  // 3 - webkit, moz
  // 4 - webkit, opera
  // 5 - webkit, w3c
  // 6 - webkit
  // 7 - moz, opera, w3c
  // 8 - moz, opera
  // 9 - moz, w3c
  // 10 - moz
  // 11 - opera, w3c
  // 12 - opera
  // 13 - w3c

  value = value || 08121991;
  var state = '@{state}';
  var value_temp = value;
  if (value == 08121991) {
    return value;
  }
  var prefixedProperties = ['animation', 'background-size', 'box-shadow', 'column', 'transform', 'filter'];

  switch (state) {
    case '1':
      syntax('start', '@-webkit-keyframes', '-webkit-');
      syntax(null, '@-moz-keyframes', '-moz-');
      syntax(null, '@-o-keyframes', '-o-');
      syntax('end', '@keyframes');
      break;
    case '2':
      syntax('start', '@-webkit-keyframes', '-webkit-');
      syntax(null, '@-moz-keyframes', '-moz-');
      syntax('end', '@keyframes');
      break;
    case '3':
      syntax('start', '@-webkit-keyframes', '-webkit-');
      syntax('end', '@-moz-keyframes', '-moz-');
      break;
    case '4':
      syntax('start', '@-webkit-keyframes', '-webkit-');
      syntax('end', '@-o-keyframes', '-o-');
      break;
    case '5':
      syntax('start', '@-webkit-keyframes', '-webkit-');
      syntax('end', '@keyframes');
      break;
    case '6':
      syntax('startend', '@-webkit-keyframes', '-webkit-');
      break;
    case '7':
      syntax('start', '@-moz-keyframes', '-moz-');
      syntax(null, '@-o-keyframes', '-o-');
      syntax('end', '@keyframes');
      break;
    case '8':
      syntax('start', '@-moz-keyframes', '-moz-');
      syntax('end', '@-o-keyframes', '-o-');
      break;
    case '9':
      syntax('start', '@-moz-keyframes', '-moz-');
      syntax('end', '@keyframes');
      break;
    case '10':
      syntax('startend', '@-moz-keyframes', '-moz-');
      break;
    case '11':
      syntax('start', '@-o-keyframes', '-o-');
      syntax('end', '@keyframes');
      break;
    case '12':
      syntax('startend', '@-o-keyframes', '-o-');
      break;
    case '13':
      syntax('startend', '@keyframes');
      break;
  }

  function syntax(start, selector, prefix) {
    var end = '}\n';
    var definition = value_temp.split(/(^[a-zA-Z0-9-]+),/g);
    var keyframes = selector + ' ' + definition[1] + '{';

    if (prefix) {
      prefixedProperties.forEach(function(property, index) {
        if (value.indexOf(property) !== -1) {
          definition[2] = definition[2].replace(new RegExp(property, 'g'), function(match) {
            return prefix + match;
          })
        }
      });
    }

    keyframes += definition[2] + end;

    if (start == 'start') {
      value = '0; } \n' + keyframes;
    } else if (start == 'startend') {
      value = '0; } \n' + keyframes.replace(end, '');
    } else if (start == 'end') {
      value = value + keyframes.replace(end, '');
    } else {
      value = value + keyframes;
    }

  }

  return value;
};


/**
 * We want totally custom result definition, because keyframes mixin is tricky one (not recommended, it's not testable)
 */

keyframes.result = 'result.less';

/**
 * For which browsers is this mixin specified
 */

keyframes.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = keyframes;
