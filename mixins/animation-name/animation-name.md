### <a name="animation-name"></a> &#8226; animation-name
**Summary:**

The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-name)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)**

**Syntax:**

Default value: none

    .animation-name(<single-animation-name>, …)
  
**Example:**

    div {
     .animation-name(animation-1, animation-2);
    }
    
    // Result
    div {
     -webkit-animation-name: animation-1, animation-2;
     -moz-animation-name: animation-1, animation-2;
     -o-animation-name: animation-1, animation-2;
     animation-name: animation-1, animation-2;
    } 


