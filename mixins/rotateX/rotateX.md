### <a name="rotateX"></a> &#8226; rotateX
**Summary:**

The rotateX() CSS function defines a transformation that moves the element around the abscissa without deforming it.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#rotateX)**

**Syntax:**

Default value: 0

    .rotateX(<angle>)

**Tips and tricks:**

  If you omit units, `rotateX` adds `deg` automatically.  
  
**Example:**

    div {
     .rotateX(45);
    }
    
    // Result
    div {
     -webkit-transform: rotateX(45deg);
     -moz-transform: rotateX(45deg);
     -opera-transform: rotateX(45deg);
     -ms-transform: rotateX(45deg);
     transform: rotateX(45deg);
    }

