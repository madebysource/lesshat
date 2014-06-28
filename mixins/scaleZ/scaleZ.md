### <a name="scaleZ"></a> &#8226; scaleZ
**Summary:**

The scaleZ() CSS function modifies the z-coordinate of each element point by a constant facto, except if this scale factor is 1, in which case the function is the identity transform.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scaleZ()">MDN</a>**

**Syntax:**

Default value: 1

    .scaleZ(<sz>) 
  
**Example:**

    div {
     .scaleZ(1.5);
    }
    
    // Result
    div {
     -webkit-transform: scaleZ(1.5);
     -moz-transform: scaleZ(1.5);
     -ms-transform: scaleZ(1.5);
     -o-transform: scaleZ(1.5);
     transform: scaleZ(1.5);
    }


