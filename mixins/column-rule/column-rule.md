### <a name="column-rule"></a> &#8226; column-rule
**Summary:**

In multi-column layouts, the column-rule CSS property specifies a straight line, or "rule", to be drawn between each column.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/column-rule)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule)**

**Syntax:**

Default value: medium none black

    .column-rule(<column-rule-width> | <column-rule-style> | <column-rule-color>)

**Tips and tricks:**

  If you omit units, `column-rule` adds `px` automatically. 
  
**Example:**

    div {
     .column-rule(5 outset #ff00ff);
    }
    
    // Result
    div {
     -webkit-column-rule: 5px outset #ff00ff;
     -moz-column-rule: 5px outset #ff00ff;
     column-rule: 5px outset #ff00ff;
    } 


