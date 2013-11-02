### <a name="display"></a> &#8226; display
**Summary:**

The display CSS property specifies the type of rendering box used for an element. This mixin is specifically for flexbox purpose.

Resources: **[CSS-Tricks](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)**

**Syntax:**

    .display(<flex> | <inline-flex>)
  
**Example:**

    div {
     .display(flex);
    }
    
    // Result
    div {
     display: -webkit-box;
     display: -ms-flexbox;
     display: -webkit-flex;
     display: -moz-box;
    } 


