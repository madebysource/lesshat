### <a name="rotateZ"></a> &#8226; rotateZ
**Summary:**

The rotateZ() CSS function defines a transformation that moves the element around the z-axis without deforming it.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#rotateZ)**

**Syntax:**

Default value: 0

    .rotateZ(<angle>)

**Tips and tricks:**

  If you omit units, `rotateZ` adds `deg` automatically.  
  
**Example:**

    div {
     .rotateZ(45);
    }
    
    // Result
    div {
     -webkit-transform: rotateZ(45deg);
     -moz-transform: rotateZ(45deg);
     -opera-transform: rotateZ(45deg);
     -ms-transform: rotateZ(45deg);
     transform: rotateZ(45deg);
    }

  
