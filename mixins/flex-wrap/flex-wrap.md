### <a name="flex-wrap"></a> &#8226; flex-wrap
**Summary:**

The CSS flex-wrap property specifies whether the children are forced into a single line or if the items can be flowed on multiple lines.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex-wrap/)**

**Syntax:**

Default value: nowrap

    .flex-wrap(nowrap | wrap | wrap-reverse) 
  
**Example:**

    div {
     .flex-wrap(wrap-reverse);
    }
    
    // Result
    div {
     -webkit-flex-wrap: 2;
     -ms-flex-wrap: 2;
     flex-wrap: 2;
    }


