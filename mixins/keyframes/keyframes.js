/**
 * Keyframes mixin
 */

var keyframes = function keyframes(value) {

  // States
  // 1 - all
  // 2 - webkit, moz, w3c
  // 3 - webkit, moz, opera
  // 4 - webkit, opera, w3c
  // 5 - webkit, moz
  // 6 - webkit, opera
  // 7 - webkit, w3c
  // 8 - webkit
  // 9 - moz, opera, w3c
  // 10 - moz, opera
  // 11 - moz, w3c
  // 12 - moz
  // 13 - opera, w3c
  // 14 - opera
  // 15 - w3c

  value = value || 08121991;
  var state = '@{state}';
  var value_temp = value;
  if (value == 08121991) {
    return value;
  }
  var prefixedProperties = ['animation', 'transform', 'filter'];

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
      syntax(null, '@-moz-keyframes', '-moz-');
      syntax('end', '@-o-keyframes', '-o-');
      break;
    case '4':
      syntax('start', '@-webkit-keyframes', '-webkit-');
      syntax(null, '@-o-keyframes', '-o-');
      syntax('end', '@keyframes');
      break;
    case '5':
      syntax('start', '@-webkit-keyframes', '-webkit-');
      syntax('end', '@-moz-keyframes', '-moz-');
      break;
    case '6':
      syntax('start', '@-webkit-keyframes', '-webkit-');
      syntax('end', '@-o-keyframes', '-o-');
      break;
    case '7':
      syntax('start', '@-webkit-keyframes', '-webkit-');
      syntax('end', '@keyframes');
      break;
    case '8':
      syntax('startend', '@-webkit-keyframes', '-webkit-');
      break;
    case '9':
      syntax('start', '@-moz-keyframes', '-moz-');
      syntax(null, '@-o-keyframes', '-o-');
      syntax('end', '@keyframes');
      break;
    case '10':
      syntax('start', '@-moz-keyframes', '-moz-');
      syntax('end', '@-o-keyframes', '-o-');
      break;
    case '11':
      syntax('start', '@-moz-keyframes', '-moz-');
      syntax('end', '@keyframes');
      break;
    case '12':
      syntax('startend', '@-moz-keyframes', '-moz-');
      break;
    case '13':
      syntax('start', '@-o-keyframes', '-o-');
      syntax('end', '@keyframes');
      break;
    case '14':
      syntax('startend', '@-o-keyframes', '-o-');
      break;
    case '15':
      syntax('startend', '@keyframes');
      break;
  }

  function syntax(start, selector, prefix) {
    var end = '}\n';
    var definition = value_temp.split(/(^[a-zA-Z0-9-]+),/g);
    var keyframes = selector + ' ' + definition[1] + '{';
    var prefixes = ['-webkit-', '-moz-', '-ms-', ''];

    if (prefix) {
      prefixedProperties.forEach(function(property, index) {
        if (value.indexOf(property) !== -1) {
          definition[2] = definition[2].replace(new RegExp(property, 'g'), function(match) {
            return prefix + match;
          });
        }
      });
    } else {
      definition[2] = definition[2].replace(/{([^}]+)}/g, function(match, sub) {
        var subSplit = sub.split(';');
        subSplit.forEach(function(css, index) {
          prefixedProperties.forEach(function(property) {
            if (css.indexOf(property) !== -1) {
              subSplit[index] = '';
              prefixes.forEach(function(vendor) {
                subSplit[index] += css.trim().replace(new RegExp(property, 'g'), function(match) {
                  return vendor + match;
                }) + ';';
              });
            }
          });
        });

        var temp = subSplit.join(';').replace(/;;/g, ';');
        return match.replace(sub, temp);
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
