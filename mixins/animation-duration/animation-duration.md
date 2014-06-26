### <a name="animation-duration"></a> &#8226; animation-duration
**Summary:**

The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-duration)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)**

**Syntax:**

Default value: 0

    .animation-duration(<time>, …)
  
**Tips and tricks:**

If you omit units after time argument, `animation-duration` is trying to be smart and add proper value.

    if (time > 10) {
        time += 'ms';
      } else {
        time += 's';
      }
  
**Example:**

    div {
     .animation-duration(2000);
    }
    
    // Result
    div {
     -webkit-animation-duration: 2000ms;
     -moz-animation-duration: 2000ms;
     -o-animation-duration: 2000ms;
     animation-duration: 2000ms;
    }
  

