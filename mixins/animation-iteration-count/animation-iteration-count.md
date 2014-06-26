### <a name="animation-iteration-count"></a> &#8226; animation-iteration-count
**Summary:**

The animation-iteration-count CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-iteration-count)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)**

**Syntax:**

Default value: 1

    .animation-iteration-count(<single-animation-iteration-count>, …)
  
**Example:**

    div {
     .animation-iteration-count(3);
    }
    
    // Result
    div {
     -webkit-animation-iteration-count: 3;
     -moz-animation-iteration-count: 3;
     -o-animation-iteration-count: 3;
     animation-iteration-count: 3;
    } 


