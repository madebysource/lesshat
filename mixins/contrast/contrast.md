### <a name="contrast"></a> &#8226; contrast
**Summary:**

Adjusts the contrast of the input. A value of 0% will create an image that is completely black. A value of 100% leaves the input unchanged. Values of amount over 100% are allowed, providing results with less contrast. If the ‘amount’ parameter is missing, a value of 100% is used.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#contrast()">MDN</a>**

**Syntax:**

Default value: 100%

    .contrast(<amount>)

**Tips and tricks:**

  If you omit units, `contrast` adds `%` automatically. 
  
**Example:**

    div {
     .contrast(200);
    }
    
    // Result
    div {
     -webkit-filter: contrast(200%);
     -moz-filter: contrast(200%);
     -ms-filter: contrast(200%);
     filter: contrast(200%);
    } 


