### <a name="invert"></a> &#8226; invert
**Summary:**

Inverts the samples in the input image. The value of ‘amount’ defines the proportion of the conversion. A value of 100% is completely inverted. A value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. If the ‘amount’ parameter is missing, a value of 100% is used.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#invert()">MDN</a>**

**Syntax:**

Default value: 0

    .invert(<percentage>) 

**Tips and tricks:**

  If you omit units, `invert` adds `%` automatically. 
  
**Example:**

    div {
     .invert(100);
    }
    
    // Result
    div {
     -webkit-filter: invert(100%);
     -moz-filter: invert(100%);
     -ms-filter: invert(100%);
     filter: invert(100%);
    }


