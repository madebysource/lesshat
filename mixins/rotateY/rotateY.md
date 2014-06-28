### <a name="rotateY"></a> &#8226; rotateY
**Summary:**

The rotateY() CSS function defines a transformation that moves the element around the ordinate without deforming it.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#rotateY)**

**Syntax:**

Default value: 0

    .rotateY(<angle>)

**Tips and tricks:**

  If you omit units, `rotateY` adds `deg` automatically.  
  
**Example:**

    div {
     .rotateY(45);
    }
    
    // Result
    div {
     -webkit-transform: rotateY(45deg);
     -moz-transform: rotateY(45deg);
     -ms-transform: rotateY(45deg);
     -o-transform: rotateY(45deg);
     transform: rotateY(45deg);
    }

