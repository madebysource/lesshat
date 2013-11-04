### <a name="brightness"></a> &#8226; brightness (shorthand for filter property)
**Summary:**

Applies a linear multiplier to input image, making it appear more or less bright. A value of 0% will create an image that is completely black. A value of 100% leaves the input unchanged. Other values are linear multipliers on the effect. Values of an amount over 100% are allowed, providing brighter results. If the ‘amount’ parameter is missing, a value of 100% is used.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#brightness()">MDN</a>**

**Syntax:**

Default value: 0

    .brightness(amount)
  
**Example:**

    div {
     .brightness(0.5);
    }
    
    // Result
    div {
     -webkit-filter: brightness(0.5);
     -moz-filter: brightness(0.5);
     -ms-filter: brightness(0.5);
     filter: brightness(0.5);
    } 


