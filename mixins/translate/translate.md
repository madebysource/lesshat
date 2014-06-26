### <a name="translate"></a> &#8226; translate
**Summary:**

Specifies a 2D translation by the vector [tx, ty]. If ty isn't specified, its value is assumed to be zero.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#translate)**

**Syntax:**
  
  Default value: 0

    .translate(<tx>[, <ty>])

**Tips and tricks:**

  If you omit units, `translate` adds `px` automatically.

**Example:**

    div {
     .translate(200);
    }
    
    // Result
    div {
     -webkit-transform: translate(200px);
     -moz-transform: translate(200px);
     -ms-transform: translate(200px);
     -o-transform: translate(200px);
     transform: translate(200px);
    }

