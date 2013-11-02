### <a name="opacity"></a> &#8226; opacity
**Summary:**

The opacity CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid.  

This is not shorthand method for filter opacity.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)**

**Syntax:**

Default value: 1

    .opacity(<number>) 

**Tips and tricks:**

  You can enable old filter syntax for IE6, just set `@ms_local: true`.
  
**Example:**

    div {
     .opacity(.5);
    }
    
    // Result
    div {
     -webkit-box-pack: flex-start;
     -moz-box-pack: start;
     -webkit-opacity: start;
     -ms-flex-pack: flex-start;
     opacity: flex-start;
    }

