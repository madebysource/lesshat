### <a name="transform"></a> &#8226; transform
**Summary:**

The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. 

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transform)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)**

**Syntax:**
  
  Default value: none

    .transform(none | <transform-function>+) 

**Tips and tricks:**

  If you omit units, `transform` can adds correct unit automatically.

     translate: 'px',
     rotate: 'deg',
     rotate3d: 'deg',
     skew: 'deg'
  
**Example:**

    div {
     .transform(scale(.5) translate(10, 20));
    }
    
    // Result
    div {
     -webkit-transform: scale(.5) translate(10, 20);
     -moz-transform: scale(.5) translate(10, 20);
     -ms-transform: scale(.5) translate(10, 20);
     -o-transform: scale(.5) translate(10, 20);
     transform: scale(.5) translate(10, 20);
    }


