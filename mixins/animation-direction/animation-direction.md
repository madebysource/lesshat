### <a name="animation-direction"></a> &#8226; animation-direction
**Summary:**

The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-direction)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)**

**Syntax:**

Default value: normal

    .animation-direction(<single-animation-direction>, …)
  
**Example:**

    div {
     .animation-direction(reverse, alternate);
    }
    
    // Result
    div {
     -webkit-animation-direction: reverse, alternate;
     -moz-animation-direction: reverse, alternate;
     -o-animation-direction: reverse, alternate;
     animation-direction: reverse, alternate;
    }


