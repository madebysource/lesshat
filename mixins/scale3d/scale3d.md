### <a name="scale3d"></a> &#8226; scale3d
**Summary:**

The scale3d() CSS function modifies the size of an element. Because the amount of scaling is defined by a vector, it can resize different dimensions at different scales.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scale3d()">MDN</a>**

**Syntax:**

Default value: 1, 1, 1

    .scale3d(<sx>, <sy>, <sz>) 
  
**Example:**

    div {
     .scale3d(1.5, .2, 3);
    }
    
    // Result
    div {
     -webkit-transform: scale3d(1.5, 0.2, 3);
     -moz-transform: scale3d(1.5, 0.2, 3);
     -opera-transform: scale3d(1.5, 0.2, 3);
     -ms-transform: scale3d(1.5, 0.2, 3);
     transform: scale3d(1.5, 0.2, 3);
    }


