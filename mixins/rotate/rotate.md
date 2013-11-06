### <a name="rotate"></a> &#8226; rotate
**Summary:**

Rotates the element clockwise around its origin by the specified angle. 

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#rotate)**

**Syntax:**

Default value: 0

    .rotate(<angle>)

**Tips and tricks:**

  If you omit units, `rotate` adds `deg` automatically.  
  
**Example:**

    div {
     .rotate(45);
    }
    
    // Result
    div {
     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -opera-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     transform: rotate(45deg);
    }

