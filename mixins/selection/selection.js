/**
 * Selection mixin
 */

var selection = function selection(value) {
  // States
  // 1 - all
  // 2 - w3c
  // 3 - moz

  value = value || 08121991;
  var state = '@{state}';
  var value_temp = value;
  if (value == 08121991) {
    return value;
  }

  switch (state) {
    case '1':
      syntax('start', '::selection');
      syntax('end', '::-moz-selection');
      break;
    case '2':
      syntax('startend', '::selection');
      break;
    case '3':
      syntax('startend', '::-moz-selection');
      break;
  }

  function syntax(start, selector) {
    var end = '}\n';
    var definition = value_temp.split(',');
    var syntax = (definition[1] || '') + selector + '{' + definition[0] + end;

    if (start == 'start') {
      value = '0; } \n' + syntax;
    } else if (start == 'startend') {
      value = '0; } \n' + syntax.replace(end, '');
    } else if (start == 'end') {
      value = value + syntax.replace(end, '');
    } else {
      value = value + syntax;
    }
  }

  value = value.replace(/;$/g,'');

  return value;
};

/**
 * We want totally custom result definition, because selection mixin is tricky one (not recommended, it's not testable)
 */

selection.result = 'result.less';

/**
 * For which browsers is this mixin specified
 */

selection.vendors = ['moz'];

/**
 * Export mixin
 */

module.exports = selection;
