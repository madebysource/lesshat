### <a name="transform-style"></a> &#8226; transform-style
**Summary:**

The transform-style CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transform-style)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)**

**Syntax:**
  
  Default value: flat

    .transform-style(flat | preserve-3d) 
  
**Example:**

    div {
     .transform-style(preserve-3d);
    }
    
    // Result
    div {
     -webkit-transform-style: preserve-3d;
     -moz-transform-style: preserve-3d;
     -ms-transform-style: preserve-3d;
     -o-transform-style: preserve-3d;
     transform-style: preserve-3d;
    }


