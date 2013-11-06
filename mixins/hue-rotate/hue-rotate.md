### <a name="hue-rotate"></a> &#8226; hue-rotate
**Summary:**

Applies a hue rotation on the input image. The value of ‘angle’ defines the number of degrees around the color circle the input samples will be adjusted. A value of 0deg leaves the input unchanged. If the ‘angle’ parameter is missing, a value of 0deg is used. Maximum value is 360deg.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#hue-rotate()">MDN</a>**

**Syntax:**

Default value: 0

    .hue-rotate(<percentage>) 

**Tips and tricks:**

  If you omit units, `hue-rotate` adds `deg` automatically. 
  
**Example:**

    div {
     .hue-rotate(50);
    }
    
    // Result
    div {
     -webkit-filter: hue-rotate(50deg);
     -moz-filter: hue-rotate(50deg);
     -ms-filter: hue-rotate(50deg);
     filter: hue-rotate(50deg);
    }


