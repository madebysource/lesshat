### <a name="hyphens"></a> &#8226; hyphens
**Summary:**

The hyphens CSS property tells the browser how to go about splitting words to improve the layout of text when line-wrapping. 

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)**

**Syntax:**

Default value: manual

    .hyphens(none | manual | auto)
  
**Example:**

    div {
     .hyphens(none);
    }
    
    // Result
    div {
     -webkit-hyphens: none;
     -moz-hyphens: none;
     -ms-hyphens: none;
    } 
