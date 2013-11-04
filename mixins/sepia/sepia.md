### <a name="sepia"></a> &#8226; sepia
**Summary:**

Converts the input image to Instagram like effect.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#sepia()">MDN</a>**

**Syntax:**

    .sepia(<percentage>) 

**Tips and tricks:**

  If you omit units, `sepia` adds `%` automatically.  
  
**Example:**

    div {
     .sepia(50);
    }
    
    // Result
    div {
     -webkit-filter: sepia(50%);
     -moz-filter: sepia(50%);
     filter: sepia(50%);
    }


