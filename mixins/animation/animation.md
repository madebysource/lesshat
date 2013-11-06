### <a name="animation"></a> &#8226; animation
**Summary:**

Shorthand to define a CSS animation, setting all parameters at once.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation/animation)**, **[CSS3files](http://www.css3files.com/animation/)**

**Syntax:**

Default value: none

    .animation(animation-name | animation-duration | animation-timing-function | animation-delay | animation-iteration-count | animation-direction | animation-fill-mode , […]*)

**Example:**

    div {
     .animation(nameAnimation 2s linear alternate);
    }
    
    // Result
    div {
     -webkit-animation: nameAnimation 2s linear alternate;
     -moz-animation: nameAnimation 2s linear alternate;
     -opera-animation: nameAnimation 2s linear alternate;
     animation: nameAnimation 2s linear alternate;
    }


