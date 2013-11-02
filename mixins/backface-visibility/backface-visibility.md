### <a name="backface-visibility"></a> &#8226; backface-visibility
**Summary:**

The CSS backface-visibility property determines whether or not the back face of the element is visible when facing the user. The back face of an element always is a transparent background, letting, when visible, a mirror image of the front face be displayed.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/backface-visibility)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility)**

**Syntax:**

Default value: none

    .backface-visibility(visible | hidden )
  
**Example:**

    div {
     .backface-visibility(hidden);
    }
    
    // Result
    div {
     -webkit-backface-visibility: none;
     -moz-backface-visibility: none;
     -o-backface-visibility: none;
     -ms-backface-visibility: none;
     backface-visibility: none;
    } 


