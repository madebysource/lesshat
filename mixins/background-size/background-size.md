### <a name="background-size"></a> &#8226; background-size
**Summary:**

The background-size CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/background-size)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)**

**Syntax:**

Default value: auto auto

    .background-size(<bg-size>, ...)

**Tips and tricks:**

If you omit units, `background-size` adds `px` automatically. 
  
**Example:**

    div {
     .background-size(cover, 100%);
    }
    
    // Result
    div {
     -webkit-background-size: cover, 100%;
     -moz-background-size: cover, 100%;
     background-size: cover, 100%;
    } 


