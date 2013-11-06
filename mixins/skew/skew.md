### <a name="skew"></a> &#8226; skew
**Summary:**

Skews the element along the X and Y axes by the specified angles. If ay isn't provided, no skew is performed on the Y axis.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#skew)**

**Syntax:**
  
  Default value: 0

    .skew(<ax>[, <ay>]) 

**Tips and tricks:**

  If you omit units, `skew` adds `%` automatically. 
  
**Example:**

    div {
     .skew(20, 30);
    }
    
    // Result
    div {
     -webkit-transform: skew(20deg, 30deg);
     -moz-transform: skew(20deg, 30deg);
     -opera-transform: skew(20deg, 30deg);
     -ms-transform: skew(20deg, 30deg);
     transform: skew(20deg, 30deg);
    }

