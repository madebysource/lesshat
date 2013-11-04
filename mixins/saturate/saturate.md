### <a name="saturate"></a> &#8226; saturate
  **Summary:**

  Saturates the input image. The value of ‘amount’ defines the proportion of the conversion.

  Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#saturate()">MDN</a>**

  **Syntax:**

  Default value: 100%

    .saturate(<amount>)

  **Tips and tricks:**

  If you omit units, `saturate` adds `%` automatically.  
    
  **Example:**

    div {
     .saturate(45);
    }
    
    // Result
    div {
     -webkit-filter: saturate(45deg);
     -moz-filter: saturate(45deg);
     -ms-filter: saturate(45deg);
     filter: saturate(45deg);
    }


