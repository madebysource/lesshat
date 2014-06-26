### <a name="scale"></a> &#8226; scale
**Summary:**

Specifies a 2D scaling operation described by [sx, sy]. If sy isn't specified, it is assumed to be equal to sx.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#scale)**

**Syntax:**

Default value: 1

    .scale(<sx>[, <sy>]) 
  
**Example:**

    div {
     .scale(2);
    }
    
    // Result
    div {
     -webkit-transform: scale(2);
     -moz-transform: scale(2);
     -ms-transform: scale(2);
     -o-transform: scale(2);
     transform: scale(2);
    }

