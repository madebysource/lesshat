### <a name="flex"></a> &#8226; flex
**Summary:**

The flex CSS property specifies ability of a flex item to alter their dimensions to fill the available space. Flex items can be stretched to use available space proportional to their flex grow factor or their flex shrink factor to prevent overflow.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex/)**

**Syntax:**

Default value: 0 1 auto

    .flex(none | [ <flex-grow> <flex-shrink> | <flex-basis> ])
  
**Example:**

    div {
     .flex(1 3 100px);
    }
    
    // Result
    div {
     -webkit-box-flex: 1;
     -moz-box-flex: 1;
     -webkit-flex: 1 3 100px;
     -ms-flex: 1 3 100px;
     flex: 1 3 100px;
    }


