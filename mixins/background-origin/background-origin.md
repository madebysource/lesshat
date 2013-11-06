### <a name="background-origin"></a> &#8226; background-origin
**Summary:**

The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/background-origin)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin)**

**Syntax:**

Default value: padding-box

    .background-origin(<box>)
  
**Example:**

      div {
       .background-origin(content-box);
      }
      
      // Result
      div {
       -webkit-background-origin: content-box;
       -moz-background-origin: content-box;
       background-origin: content-box;
      } 


