### <a name="column-gap"></a> &#8226; column-gap
**Summary:**

The column-gap CSS property sets the size of the gap between columns for elements which are specified to display as a multi-column element.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/column-gap)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)**

**Syntax:**

Default value: normal

    .column-gap(<length> | normal)

**Tips and tricks:**

  If you omit units, `column-gap` adds `px` automatically. 
  
**Example:**

    div {
     .column-gap(30);
    }
    
    // Result
    div {
     -webkit-column-gap: 30px;
     -moz-column-gap: 30px;
     column-gap: 30px;
    }   


