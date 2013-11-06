### <a name="transition-duration"></a> &#8226; transition-duration
**Summary:**

The transition-duration CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition-duration)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)**

**Syntax:**
  
  Default value: 0

    .transition-duration(<time>)

**Tips and tricks:**

  If you omit units after time argument, `transition-duration` is trying to be smart and add properly value.

      if (time > 10) {
          time += 'ms';
        } else {
          time += 's';
        }

**Example:**

    div {
     .transition-duration(6);
    }
    
    // Result
    div {
     -webkit-transition-duration: 6s;
     -moz-transition-duration: 6s;
     -o-transition-duration: 6s;
     transition-duration: 6s;
    }


