/**
 * Keyframes mixin
 */

var calc = function calc(value) {

  // States
  // 1 - all
  // 2 - webkit, moz
  // 3 - webkit, w3c
  // 4 - webkit
  // 5 - moz, w3c
  // 6 - moz
  // 7 - w3c

  value = value || 08121991;
  var state = '@{state}';
  var value_temp = value;
  if (value == 08121991) {
    return value;
  }

  switch (state) {
    case '1':
      syntax('-webkit-calc', 'start');
      syntax('-moz-calc');
      syntax('calc');
      break;
    case '2':
      syntax('-webkit-calc', 'start');
      syntax('-moz-calc');
      break;
    case '3':
      syntax('-webkit-calc', 'start');
      syntax('calc');
      break;
    case '4':
      syntax('-webkit-calc', 'start');
      break;
    case '5':
      syntax('-moz-calc', 'start');
      syntax('calc');
      break;
    case '6':
      syntax('-moz-calc', 'start');
      break;
    case '7':
      syntax('calc', 'start');
      break;
  }

  function syntax(property, start) {
    var end = ');\n';
    var definition = value_temp.split(',');
    var syntax = definition[0] + ':' + property + '(' + (definition[1].trim() || 0) + end;

    if (start == 'start') {
      value = '0;\n' + syntax;
    } else {
      value = value + syntax;
    }
  }

  value = value.replace(/;$/g,'');

  return value;
};


/**
 * We want totally custom result definition, because calc mixin is tricky one (not recommended, it's not testable)
 */

calc.result = 'result.less';

/**
 * For which browsers is this mixin specified
 */

calc.vendors = ['webkit', 'moz'];

/**
 * Export mixin
 */

module.exports = calc;
