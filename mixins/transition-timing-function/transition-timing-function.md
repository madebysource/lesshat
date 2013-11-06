### <a name="transition-timing-function"></a> &#8226; transition-timing-function
**Summary:**

The CSS transition-timing-function property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition-timing-function)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)**

**Syntax:**
  
  Default value: ease

    .transition-timing-function(<timing-function>, ...)

**Example:**

    div {
     .transition-timing-function(cubic-bezier(0,0,1,1), ease);
    }
    
    // Result
    div {
     -webkit-transition-timing-function: cubic-bezier(0, 0, 1, 1), ease;
     -moz-transition-timing-function: cubic-bezier(0, 0, 1, 1), ease;
     -o-transition-timing-function: cubic-bezier(0, 0, 1, 1), ease;
     transition-timing-function: cubic-bezier(0, 0, 1, 1), ease;
    }


