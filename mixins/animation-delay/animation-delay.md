### <a name="animation-delay"></a> &#8226; animation-delay
**Summary:**

Defines a length of time to elapse before an animation starts, allowing an animation to begin execution some time after it is applied.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-delay)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)**

**Syntax:**

Default value: 0

    .animation-delay(<time>, …)
  
**Tips and tricks:**

If you omit units after time argument, `animation-delay` is trying to be smart and add properly value.

    if (time > 10) {
        time += 'ms';
      } else {
        time += 's';
      }

**Example:**

    div {
     .animation-delay(2, 200);
    }
    
    // Result
    div {
     -webkit-animation-delay: 2s, 200ms;
     -moz-animation-delay: 2s, 200ms;
     -opera-animation-delay: 2s, 200ms;
     animation-delay: 2s, 200ms;
    }


