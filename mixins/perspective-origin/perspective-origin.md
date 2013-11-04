### <a name="perspective-origin"></a> &#8226; perspective-origin
**Summary:**

The perspective-origin CSS property determines the position the viewer is looking at. It is used as the vanishing point by the perspective property.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/p/perspective-origin/)**

**Syntax:**

Default value: 50% 50%

    .perspective-origin(<percentage> | <length> | constants | inherit)

**Tips and tricks:**

  If you omit units, `perspective-origin` adds `%` automatically.  
  
**Example:**

    div {
     .perspective-origin(top left);
    }
    
    // Result
    div {
     -moz-perspective-origin: top left;
     -webkit-perspective-origin: top left;
     perspective-origin: top left;
    }


