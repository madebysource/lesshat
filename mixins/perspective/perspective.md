### <a name="perspective"></a> &#8226; perspective
**Summary:**

The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/p/perspective/)**

**Syntax:**

Default value: none

    .perspective(none | <length>)

**Tips and tricks:**

  If you omit units, `perspective` adds `px` automatically.  
  
**Example:**

    div {
     .perspective(1000);
    }
    
    // Result
    div {
     -moz-perspective: 1000px;
     -webkit-perspective: 1000px;
     perspective: 1000px;
    }


