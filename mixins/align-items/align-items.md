### <a name="align-items"></a> &#8226; align-items
**Summary:**

The CSS align-items property aligns flex items of the current flex line the same way as justify-content but in the perpendicular direction.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/a/align-items/)**

**Syntax:**

Default value: stretch

    .align-items(flex-start | flex-end | center | baseline | stretch)

**Example:**

    div {
     .align-items(flex-start);
    }
    
    // Result
    div {
     -webkit-box-align: flex-start;
     -moz-box-align: start;
     -webkit-align-items: start;
     -ms-flex-align: flex-start;
     align-items: flex-start;
    }
  

