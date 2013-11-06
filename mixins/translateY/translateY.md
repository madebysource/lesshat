### <a name="translateY"></a> &#8226; translateY
**Summary:**

Translates the element by the given amount along the Y axis.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#translateY)**

**Syntax:**
  
  Default value: 0

    .translateY(<ty>)

**Tips and tricks:**

  If you omit units, `translateY` adds `px` automatically.

**Example:**

    div {
     .translateY(20);
    }
    
    // Result
    div {
     -webkit-transform: translateY(20px);
     -moz-transform: translateY(20px);
     -o-transform: translateY(20px);
     transform: translateY(20px);
    }

