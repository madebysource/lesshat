### <a name="translateZ"></a> &#8226; translateZ
**Summary:**

Translates the element by the given amount along the Z axis.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#translateZ)**

**Syntax:**
  
  Default value: 0

    .translateZ(<ty>)

**Tips and tricks:**

  If you omit units, `translateZ` adds `px` automatically.

**Example:**

    div {
     .translateZ(20);
    }
    
    // Result
    div {
     -webkit-transform: translateZ(20px);
     -moz-transform: translateZ(20px);
     -ms-transform: translateZ(20px);
     -o-transform: translateZ(20px);
     transform: translateZ(20px);
    }


