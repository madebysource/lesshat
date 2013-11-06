### <a name="justify-content"></a> &#8226; justify-content
**Summary:**

The CSS justify-content property defines how a browser distributes available space between and around elements when aligning flex items in the main-axis of the current line. 

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/j/justify-content/)**

**Syntax:**

Default value: flex-start

    .justify-content(flex-start | flex-end | center | space-between | space-around) 
  
**Example:**

    div {
     .justify-content(flex-start);
    }
    
    // Result
    div {
     -webkit-box-pack: flex-start;
     -moz-box-pack: start;
     -webkit-justify-content: start;
     -ms-flex-pack: flex-start;
     justify-content: flex-start;
    }


