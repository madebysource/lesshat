### <a name="animation-play-state"></a> &#8226; animation-play-state
**Summary:**

The animation-play-state CSS property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-play-state)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)**

**Syntax:**

Default value: running

    .animation-play-state(<single-animation-play-state>, …)
  
**Example:**

    div {
     .animation-play-state(paused);
    }
    
    // Result
    div {
     -webkit-animation-play-state: paused;
     -moz-animation-play-state: paused;
     -o-animation-play-state: paused;
     animation-play-state: paused;
    } 


