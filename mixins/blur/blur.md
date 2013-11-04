### <a name="blur"></a> &#8226; blur (shorthand for filter property)
**Summary:**

Applies a Gaussian blur to the input image. The value of ‘radius’ defines the value of the standard deviation to the Gaussian function, or how many pixels on the screen blend into each other, so a larger value will create more blur. If no parameter is provided, then a value 0 is used. The parameter is specified as a CSS length, but does not accept percentage values.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#blur()">MDN</a>**

**Syntax:**

Default value: 0

    .blur(length)

**Tips and tricks:**

If you omit units, `blur` adds `px` automatically. 
  
**Example:**

    div {
     .blur(5px);
    }
    
    // Result
    div {
     -webkit-filter: blur(5px);
     -moz-filter: blur(5px);
     -ms-filter: blur(5px);
     filter: blur(5px);
    } 


