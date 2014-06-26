### <a name="translate3d"></a> &#8226; translate3d
**Summary:**

The translate3d() CSS function moves the position of the element in the 3D space.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#translate3d()">MDN</a>**

**Syntax:**
  
  Default value: 0

    .translate3d(<tx>, <ty>, <tz>)

**Tips and tricks:**

  If you omit units, `translate3d` adds `px` automatically.

**Example:**

    div {
     .translate3d(20, 30, 10);
    }
    
    // Result
    div {
     -webkit-transform: translate3d(20px, 30px, 10px);
     -moz-transform: translate3d(20px, 30px, 10px);
     -ms-transform: translate3d(20px, 30px, 10px);
     -o-transform: translate3d(20px, 30px, 10px);
     transform: translate3d(20px, 30px, 10px);
    }


