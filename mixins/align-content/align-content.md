### <a name="align-content"></a> &#8226; align-content
**Summary:**

The CSS align-content property aligns a flex container's lines within the flex container when there is an extra space on the cross-axis. This property has no effect on the single line flexible boxes.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/a/align-content/)**

**Syntax:**

Default value: stretch

    .align-content(flex-start | flex-end | center | space-between | space-around | stretch)

**Example:**

    div {
     .align-content(flex-start);
    }
    
    // Result
    div {
     -webkit-align-content: flex-start;
     -ms-flex-line-pack: start;
     align-content: flex-start;
    } 


