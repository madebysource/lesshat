### <a name="align-self"></a> &#8226; align-self
**Summary:**

The align-self CSS property aligns flex items of the current flex line overriding the align-items value. If any of the flex item's cross-axis margin is set to auto, then align-self is ignored.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/a/align-self/)**

**Syntax:**

Default value: auto

    .align-self(auto | flex-start | flex-end | center | baseline | stretch)

**Example:**

    div {
     .align-self(flex-start);
    }
    
    // Result
    div {
     -webkit-align-self: flex-start;
     -ms-align-self: start;
     align-self: flex-start;
    }


