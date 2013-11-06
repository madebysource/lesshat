### <a name="columns"></a> &#8226; columns
**Summary:**

The columns CSS property is a shorthand property allowing to set both the column-width and the column-count properties at the same time.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/columns)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)**

**Syntax:**

Default value: auto

    .columns(<column-width> | <column-count>)

**Tips and tricks:**

  If you omit units for column-width argument, `columns` adds `px` to it automatically. 
  
**Example:**

    div {
     .columns(100 3);
    }
    
    // Result
    div {
     -webkit-columns: 100px 3;
     -moz-columns: 100px 3;
     columns: 100px 3;
    } 


