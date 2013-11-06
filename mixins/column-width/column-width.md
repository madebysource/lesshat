### <a name="column-width"></a> &#8226; column-width
**Summary:**

The column-width CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/column-width)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-width)**

**Syntax:**

Default value: auto

    .column-width(<length> | auto)

**Tips and tricks:**

  If you omit units, `column-width` adds `px` automatically. 
  
**Example:**

    div {
     .column-width(100px);
    }
    
    // Result
    div {
     -webkit-column-width: 100px;
     -moz-column-width: 100px;
     column-width: 100px;
    }  


