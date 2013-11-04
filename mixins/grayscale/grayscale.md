### <a name="grayscale"></a> &#8226; grayscale
**Summary:**

Converts the input image to grayscale. The value of ‘amount’ defines the proportion of the conversion. A value of 100% is completely grayscale. A value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. If the ‘amount’ parameter is missing, a value of 100% is used.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#grayscale()">MDN</a>**

**Syntax:**

Default value: 0

    .grayscale(<percentage>) 

**Tips and tricks:**

  If you omit units, `grayscale` adds `%` automatically. 
  
**Example:**

    div {
     .grayscale(50);
    }
    
    // Result
    div {
     -webkit-filter: grayscale(50%);
     -moz-filter: grayscale(50%);
     -ms-filter: grayscale(50%);
     filter: grayscale(50%);
    }


