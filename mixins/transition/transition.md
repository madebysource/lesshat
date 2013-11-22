### <a name="transition"></a> &#8226; transition
**Summary:**

The CSS transition property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It allows to define the transition between two states of an element.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)**

**Syntax:**
  
  Default value: all 0 ease 0

    .transition([ none | <single-transition-property> ] | <time> | <timing-function> | <time>)

**Tips and tricks:**

  If you omit units after time argument, `transition` is trying to be smart and add properly value.

      if (time > 10) {
          time += 'ms';
        } else {
          time += 's';
        }

  And also properties inside `transition` definition are automatically prefixed, if it is needed.  
  **W3C property value is appending all prefixed values.**  
  Why? Some browsers support W3C unprefixed properties, but values must be sometimes prefixed.
  Let's consider this example:

    div {
    -webkit-transition: -webkit-filter .3s ease;
    -moz-transition: -moz-filter .3s ease;
    -o-transition: filter .3s ease;

    // There is a problem! Webkit needs -webkit-filter property
    transition: filter .3s ease;
    }

**Example:**

    div {
     .transition(box-shadow 0.2s linear, color .4s .2s ease);
    }
    
    // Result
    div {
     -webkit-transition: -webkit-box-shadow 0.2s linear, color 0.4s 0.2s ease;
     -moz-transition: -moz-box-shadow 0.2s linear, color 0.4s 0.2s ease;
     -o-transition: box-shadow 0.2s linear, color 0.4s 0.2s ease;
     transition: box-shadow 0.2s linear, color 0.4s 0.2s ease;
    }


