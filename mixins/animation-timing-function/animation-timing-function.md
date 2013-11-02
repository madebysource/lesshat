### <a name="animation-timing-function"></a> &#8226; animation-timing-function
**Summary:**

The animation-timing-function CSS property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-timing-function)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)**

**Syntax:**

Default value: ease

    .animation-timing-function(<single-animation-timing-function>, …)
  
**Example:**

    div {
     .animation-timing-function(cubic-bezier(0.1, 0.7, 1.0, 0.1));
    }
    
    // Result
    div {
     -webkit-animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
     -moz-animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
     -opera-animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
     animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
    } 


