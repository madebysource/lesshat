### <a name="transition-delay"></a> &#8226; transition-delay
**Summary:**

The transition-delay CSS property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition-delay)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)**

**Syntax:**
  
  Default value: 0

    .transition-delay(<time>)

**Tips and tricks:**

  If you omit units after time argument, `transition-delay` is trying to be smart and add properly value.

      if (time > 10) {
          time += 'ms';
        } else {
          time += 's';
        }

**Example:**

    div {
     .transition-delay(200);
    }
    
    // Result
    div {
     -webkit-transition-delay: 200ms;
     -moz-transition-delay: 200ms;
     -o-transition-delay: 200ms;
     transition-delay: 200ms;
    }


