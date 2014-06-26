### <a name="skewX"></a> &#8226; skewX
**Summary:**

Skews the element along the X axis by the given angle.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#skewX)**

**Syntax:**
  
  Default value: 0

    .skewX(<angle>) 

**Tips and tricks:**

  If you omit units, `skewX` adds `%` automatically. 
  
**Example:**

    div {
     .skewX(20);
    }
    
    // Result
    div {
     -webkit-transform: skewX(20deg);
     -moz-transform: skewX(20deg);
     -ms-transform: skewX(20deg);
     -o-transform: skewX(20deg);
     transform: skewX(20deg);
    }

