/**
 * BackgroundImage mixin
 */

var backgroundImage = function backgroundImage(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
  var values = {
    top: 'to bottom',
    right: 'to left',
    bottom: 'to top',
    left: 'to right'
  };

  var values_keys = Object.keys(values);
  values_keys.some(function(el) {
    if (value.indexOf(el) >= 0 && !(new RegExp('to\\s+' + el, 'g')).test(value)) {
      value = value.replace(new RegExp(el), values[el]);
      return true;
    }
  });

  return value;
};

backgroundImage.webkit = function backgroundImageWebkit(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
  var values = {
    'to bottom': 'top',
    'to left': 'right',
    'to top': 'bottom',
    'to right': 'left',
    'ellipse at center': 'center, ellipse cover',
    'circle closest-side': 'center center, circle contain',
    'circle farthest-corner': 'center center, circle cover',
    'circle farthest-side': 'center center, circle cover',
    'ellipse closest-side': 'center center, ellipse contain',
    'ellipse farthest-corner': 'center center, ellipse cover',
    'ellipse farthest-side': 'center center, ellipse cover'
  };
  var radial_regexp = /(radial-gradient\()([a-z- ]+)at\s+(\w+)\s*(\w*)/g;

  var values_keys = Object.keys(values);
  values_keys.some(function(el) {
    var radial_values = null;
    if (value.indexOf(el) >= 0) {
      value = value.replace(new RegExp(el + '(?![ a-z0-9])', 'g'), values[el]);
      return true;
    }
    if (radial_regexp.test(value)) {
      value = value.replace(radial_regexp, function(match, sub, sub2, sub3, sub4) {
        return sub.trim() + sub3.trim() + ' ' + sub4.trim() + ',' + sub2.replace(/closest-side/g, 'contain').replace(/farthest-corner/g, 'cover').trim();
      })
    }
  });

  value = value.replace(/(\d+)\s*deg/g, function(match, sub) {
    return 90 - sub + 'deg';
  }).replace(/(linear|radial)-gradient/g, '-webkit-$1-gradient');

  return value;
};

backgroundImage.moz = function backgroundImageMoz(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
  var values = {
    'to bottom': 'top',
    'to left': 'right',
    'to top': 'bottom',
    'to right': 'left',
    'ellipse at center': 'center, ellipse cover',
    'circle closest-side': 'center center, circle contain',
    'circle farthest-corner': 'center center, circle cover',
    'circle farthest-side': 'center center, circle cover',
    'ellipse closest-side': 'center center, ellipse contain',
    'ellipse farthest-corner': 'center center, ellipse cover',
    'ellipse farthest-side': 'center center, ellipse cover'
  };
  var radial_regexp = /(radial-gradient\()([a-z- ]+)at\s+(\w+)\s*(\w*)/g;

  var values_keys = Object.keys(values);
  values_keys.some(function(el) {
    var radial_values = null;
    if (value.indexOf(el) >= 0) {
      value = value.replace(new RegExp(el + '(?![ a-z0-9])', 'g'), values[el]);
      return true;
    }
    if (radial_regexp.test(value)) {
      value = value.replace(radial_regexp, function(match, sub, sub2, sub3, sub4) {
        return sub.trim() + sub3.trim() + ' ' + sub4.trim() + ',' + sub2.replace(/closest-side/g, 'contain').replace(/farthest-corner/g, 'cover').trim();
      })
    }
  });

  value = value.replace(/(\d+)\s*deg/g, function(match, sub) {
    return 90 - sub + 'deg';
  }).replace(/(linear|radial)-gradient/g, '-moz-$1-gradient');

  return value;
};

backgroundImage.opera = function backgroundImageOpera(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
  var values = {
    'to bottom': 'top',
    'to left': 'right',
    'to top': 'bottom',
    'to right': 'left',
    'ellipse at center': 'center, ellipse cover',
    'circle closest-side': 'center center, circle contain',
    'circle farthest-corner': 'center center, circle cover',
    'circle farthest-side': 'center center, circle cover',
    'ellipse closest-side': 'center center, ellipse contain',
    'ellipse farthest-corner': 'center center, ellipse cover',
    'ellipse farthest-side': 'center center, ellipse cover'
  };
  var radial_regexp = /(radial-gradient\()([a-z- ]+)at\s+(\w+)\s*(\w*)/g;

  var values_keys = Object.keys(values);
  values_keys.some(function(el) {
    var radial_values = null;
    if (value.indexOf(el) >= 0) {
      value = value.replace(new RegExp(el + '(?![ a-z0-9])', 'g'), values[el]);
      return true;
    }
    if (radial_regexp.test(value)) {
      value = value.replace(radial_regexp, function(match, sub, sub2, sub3, sub4) {
        return sub.trim() + sub3.trim() + ' ' + sub4.trim() + ',' + sub2.replace(/closest-side/g, 'contain').replace(/farthest-corner/g, 'cover').trim();
      })
    }
  });

  value = value.replace(/(\d+)\s*deg/g, function(match, sub) {
    return 90 - sub + 'deg';
  }).replace(/(linear|radial)-gradient/g, '-o-$1-gradient');

  return value;
};

backgroundImage.ms = function backgroundImageMs(value) {
  value = value || 08121991;
  if (value == 08121991) {
    return value;
  }
  var gradients = /linear|radial/g.test(value) && value.split(/,(?=\s*(?:linear|radial|url))/g);
  var svg_gradients = [];
  var values = {
    'to bottom': 'x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"',
    'to left': 'x1=\"100%\" y1=\"0%\" x2=\"0%\" y2=\"0%\"',
    'to top': 'x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"',
    'to right': 'x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"',
    get 'top' () {
      return this['to bottom'];
    },
    get '180deg' () {
      return this['to bottom'];
    },
    get 'right' () {
      return this['to left'];
    },
    get '270deg' () {
      return this['to left'];
    },
    get 'bottom' () {
      return this['to top'];
    },
    get '0deg' () {
      return this['to top']
    },
    get 'left' () {
      return this['to right'];
    },
    get '90deg' () {
      return this['to right'];
    },
    '-45deg': 'x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"',
    '45deg': 'x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"0%\"',
    'ellipse at center': 'cx=\"50%\" cy=\"50%\" r=\"75%\"'
  };
  var svg = {
    uri_data: 'url(data:image/svg+xml;base64,',
    xml: '<?xml version=\"1.0\" ?>',
    svg_start: '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 1 1\" preserveAspectRatio=\"none\">',
    linear_gradient_start: '<linearGradient id=\"lesshat-generated\" gradientUnits=\"userSpaceOnUse\"',
    radial_gradient_start: '<radialGradient id=\"lesshat-generated\" gradientUnits=\"userSpaceOnUse\"',
    linear_gradient_end: '</linearGradient>',
    radial_gradient_end: '</radialGradient>',
    rect_linear: '<rect x=\"0\" y=\"0\" width=\"1\" height=\"1\" fill=\"url(#lesshat-generated)\" />',
    rect_radial: '<rect x=\"-50\" y=\"-50\" width=\"101\" height=\"101\" fill=\"url(#lesshat-generated)\" />',
    svg_end: '</svg>'
  };

  if (gradients.length) {
    gradients.forEach(function(gradient, index) {
      var obj = {};
      // direction
      Object.keys(values).some(function(inner_val) {
        if (gradient.indexOf(inner_val) >= 0) {
          obj.svg_direction = values[inner_val];
          return true;
        } else {
          obj.svg_direction = false;
        }
      });
      // type (linear|radial)
      if (/linear/.test(gradient)) {
        obj.svg_type = 'linear';
      } else if (/radial/.test(gradient)) {
        obj.svg_type = 'radial';
      } else if (!/linear/.test(gradient) && !/radial/.test(gradient)) {
        obj.url = gradient.trim();
        obj.svg_type = 'url';
        obj.svg_direction = true;
        svg_gradients.push(obj);
        return false;
      }
      // Colors
      var colors_count = gradient.match(/rgb|#[a-zA-Z0-9]|hsl/g).length;
      obj.svg_stops = [];
      // hex
      if (gradient.match(/#[a-zA-Z0-9]/g) && (gradient.match(/#[a-zA-Z0-9]/g).length == colors_count)) {
        // Are there percentages?
        if (gradient.match((/#[a-zA-Z0-9]+\s+(\d+%)/g)) && gradient.match((/#[a-zA-Z0-9]+\s+(\d+%)/g)).length == colors_count) {
          gradient.match(/#[a-zA-Z0-9]+\s+(\d+%)/g).forEach(function(inner_val) {
            inner_val = inner_val.split(' ');
            obj.svg_stops.push('<stop offset=\"' + inner_val[1] + '\" stop-color=\"' + inner_val[0] + '\" stop-opacity=\"1\"/>');
          });
        } else {
          var shares = Math.floor(100 / (gradient.match(/#[a-zA-Z0-9]/g).length - 1));
          gradient.match(/#[a-zA-Z0-9]+/g).forEach(function(inner_val, index) {
            obj.svg_stops.push('<stop offset=\"' + (shares * index) + '%\" stop-color=\"' + inner_val + '\" stop-opacity=\"1\"/>');
          });
        }
      }
      // Rgb(a)
      if (gradient.match(/rgba?\(\d+,\s*\d+,\s*\d+(?:,\s*(0|1|\.\d+|0\.\d+))?\)/g) && (gradient.match(/(?:rgb|rgba)?\(\d+,\s*\d+,\s*\d+(?:,\s*(0|1|\.\d+|0\.\d+))?\)/g).length == colors_count)) {
        // Are there percentages?
        if (gradient.match(/rgba?\(\d+,\s*\d+,\s*\d+(?:,\s*(0|1|\.\d+|0\.\d+))?\)\s+\d+%+/g) && (gradient.match(/rgba?\(\d+,\s*\d+,\s*\d+(?:,\s*(0|1|\.\d+|0\.\d+))?\)\s+\d+%+/g).length) == colors_count) {
          gradient.replace(/rgba?\((\d+,\s*\d+,\s*\d+)(?:,\s*(0|1|\.\d+|0\.\d+))?\)\s+(\d+%)+/g, function(match, sub, sub_2, sub_3) {
            obj.svg_stops.push('<stop offset=\"' + sub_3 + '\" stop-color=\"rgb(' + sub + ')\" stop-opacity=\"' + (sub_2 || 1) + '\"/>');
          });
        } else {
          var shares = Math.floor(100 / (gradient.match(/(rgb|rgba)\(/g).length - 1));
          gradient.match(/rgba?\((\d+,\s*\d+,\s*\d+)(?:,\s*(0|1|\.\d+|0\.\d+))?\)/g).forEach(function(element, index) {
            element.replace(/rgba?\((\d+,\s*\d+,\s*\d+)(?:,\s*(0|1|\.\d+|0\.\d+))?\)/g, function(match, sub, sub_2, sub_3) {
              obj.svg_stops.push('<stop offset=\"' + (shares * index) + '%\" stop-color=\"rgb(' + sub + ')\" stop-opacity=\"' + (sub_2 || 1) + '\"/>');
            });
          });
        }
      }
      // Hsl(a)
      if (gradient.match(/hsla?\((\d+,\s*\d+%,\s*\d+%),\s*(0|1|\.\d+|0\.\d+)\)/g) && (gradient.match(/hsla?\((\d+,\s*\d+%,\s*\d+%),\s*(0|1|\.\d+|0\.\d+)\)/g).length == colors_count)) {
        // Are there percentages?
        if (gradient.match(/hsla?\((\d+,\s*\d+%,\s*\d+%),\s*(0|1|\.\d+|0\.\d+)\)\s*(\d+%)+/g) && (gradient.match(/hsla?\((\d+,\s*\d+%,\s*\d+%),\s*(0|1|\.\d+|0\.\d+)\)\s*(\d+%)+/g).length) == colors_count) {
          gradient.replace(/hsla?\((\d+,\s*\d+%,\s*\d+%),\s*(0|1|\.\d+|0\.\d+)\)\s*(\d+%)+/g, function(match, sub, sub_2, sub_3) {
            obj.svg_stops.push('<stop offset=\"' + sub_3 + '\" stop-color=\"hsl(' + sub + ')\" stop-opacity=\"' + (sub_2 || 1) + '\"/>');
          });
        } else {
          var shares = Math.floor(100 / (gradient.match(/(hsl|hsla)\(/g).length - 1));
          gradient.match(/hsla?\((\d+,\s*\d+%,\s*\d+%),\s*(0|1|\.\d+|0\.\d+)\)/g).forEach(function(element, index) {
            element.replace(/hsla?\((\d+,\s*\d+%,\s*\d+%),\s*(0|1|\.\d+|0\.\d+)\)/g, function(match, sub, sub_2, sub_3) {
              obj.svg_stops.push('<stop offset=\"' + (shares * index) + '%\" stop-color=\"hsl(' + sub + ')\" stop-opacity=\"' + (sub_2 || 1) + '\"/>');
            });
          });
        }
      }

      // save to array
      svg_gradients.push(obj);
    });

    // Glue it together
    var syntax = [];
    var passed = svg_gradients.every(function(element) {
      for (var i in element) {
        if (element[i] == false || (element[i].length == 0)) {
          return false;
        }
      }
      return true;
    });

    if (!passed) {
      return 08121991;
    }
    svg_gradients.forEach(function(element, index) {
      if (element.svg_type == 'linear' || element.svg_type == 'radial') {
        syntax[index] = (svg.xml + svg.svg_start);
      }
      if (element.svg_type == 'linear') {
        syntax[index] += svg.linear_gradient_start + ' ' + element.svg_direction + '>';
        element.svg_stops.forEach(function(value) {
          syntax[index] += value;
        });
        syntax[index] += svg.linear_gradient_end;
        syntax[index] += svg.rect_linear;
        syntax[index] += svg.svg_end;
      } else if (element.svg_type == 'radial') {
        syntax[index] += svg.radial_gradient_start + ' ' + element.svg_direction + '>';
        element.svg_stops.forEach(function(value) {
          syntax[index] += value;
        });
        syntax[index] += svg.radial_gradient_end;
        syntax[index] += svg.rect_radial;
        syntax[index] += svg.svg_end;
      } else if (element.svg_type == 'url') {
        syntax[index] = element.url;
      }
    });

    syntax.forEach(function(element, index) {
      if (/<\?xml version="1.0" \?>/g.test(element)) {
        syntax[index] = svg.uri_data + base64_encode(element) + ')';
      }
    });

    value = syntax.join(',');

  }

  function base64_encode(data) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
      ac = 0,
      enc = '',
      tmp_arr = [];

    if (!data) {
      return data;
    }

    do { // pack three octets into four hexets
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);

      bits = o1 << 16 | o2 << 8 | o3;

      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;

      // use hexets to index into b64, and append result to encoded string
      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;

    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

  }

  return value;
};

/**
 * Result properties aren't prefixed
 */

backgroundImage.result = {
  prefixed: false
};

/**
 * For which browsers is this mixin specified
 */

backgroundImage.vendors = ['ms', 'webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = backgroundImage;
