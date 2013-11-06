### <a name="order"></a> &#8226; order
**Summary:**

The CSS order property specifies the order used to lay out flex items in their flex container.  

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/order)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/o/order/)**

**Syntax:**

Default value: 0

    .order(<integer>) 
  
**Example:**

    div {
     .order(1);
    }
    
    // Result
    div {
     -webkit-box-ordinal-group: 1;
     -moz-box-ordinal-group: 1;
     -ms-flex-order: 1;
     -webkit-order: 1;
     order: 1;
    }


