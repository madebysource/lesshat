/**
 * {{ mixin_name | firstLetter }} mixin
 */

var {{ mixin_name }} = function {{ mixin_name }}(value) {
  value = value || {{ default_value }};

  return value;
};

/**
 * For which browsers is this mixin specified
 */

{{ mixin_name }}.vendors = {{ vendors }};

/**
 * Export mixin
 */

module.exports = {{ mixin_name }};
