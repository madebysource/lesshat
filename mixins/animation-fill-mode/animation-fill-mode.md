### <a name="animation-fill-mode"></a> &#8226; animation-fill-mode
**Summary:**

The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-fill-mode)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)**

**Syntax:**

Default value: none

    .animation-fill-mode(<single-animation-fill-mode>, …)
  
**Example:**

    div {
     .animation-fill-mode(forwards);
    }
    
    // Result
    div {
     -webkit-animation-fill-mode: forwards;
     -moz-animation-fill-mode: forwards;
     -o-animation-fill-mode: forwards;
     animation-fill-mode: forwards;
    }


