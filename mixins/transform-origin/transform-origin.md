### <a name="transform-origin"></a> &#8226; transform-origin
**Summary:**

The transform-origin CSS property lets you modify the origin for transformations of an element.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transform-origin)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)**

**Syntax:**
  
  Default value: 50% 50% 0

    .transform-origin(<percentage> | <length> | <named-position>) 

**Tips and tricks:**

  If you omit units, `transform-origin` adds `%` automatically.
  
**Example:**

    div {
     .transform-origin(50 50);
    }
    
    // Result
    div {
     -webkit-transform-origin: 50% 50%;
     -moz-transform-origin: 50% 50%;
     -ms-transform-origin: 50% 50%;
     -o-transform-origin: 50% 50%;
     transform-origin: 50% 50%;
    }


