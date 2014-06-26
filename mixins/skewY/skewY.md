### <a name="skewY"></a> &#8226; skewY
**Summary:**

Skews the element along the Y axis by the given angle.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#skewY)**

**Syntax:**
  
  Default value: 0

    .skewY(<angle>) 

**Tips and tricks:**

  If you omit units, `skewY` adds `%` automatically. 
  
**Example:**

    div {
     .skewY(20);
    }
    
    // Result
    div {
     -webkit-transform: skewY(20deg);
     -moz-transform: skewY(20deg);
     -ms-transform: skewY(20deg);
     -o-transform: skewY(20deg);
     transform: skewY(20deg);
    }


