### <a name="translateX"></a> &#8226; translateX
**Summary:**

Translates the element by the given amount along the X axis.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#translateX)**

**Syntax:**
  
  Default value: 0

    .translateX(<tx>)

**Tips and tricks:**

  If you omit units, `translateX` adds `px` automatically.

**Example:**

    div {
     .translateX(20);
    }
    
    // Result
    div {
     -webkit-transform: translateX(20px);
     -moz-transform: translateX(20px);
     -ms-transform: translateX(20px);
     -o-transform: translateX(20px);
     transform: translateX(20px);
    }

