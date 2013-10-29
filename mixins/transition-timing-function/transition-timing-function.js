/**
 * TransitionTimingFunction mixin
 */

var transitionTimingFunction = function transitionTimingFunction(value) {
  value = value || 'ease';

  return value;
};

/**
 * For which browsers is this mixin specified
 */

transitionTimingFunction.vendors = ['webkit', 'moz', 'opera'];


/**
 * Export mixin
 */

module.exports = transitionTimingFunction;