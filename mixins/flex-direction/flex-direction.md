### <a name="flex-direction"></a> &#8226; flex-direction
**Summary:**

The CSS flex-direction property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex-direction/)**

**Syntax:**

Default value: row

    .flex-direction(row | row-reverse | column | column-reverse) 
  
**Example:**

    div {
     .flex-direction(row);
    }
    
    // Result
    div {
     -webkit-box-direction: normal;
     -moz-box-direction: normal;
     -webkit-box-orient: horizontal;
     -moz-box-orient: horizontal;
     -webkit-flex-direction: row;
     -ms-flex-direction: row;
     flex-direction: row;
    }


