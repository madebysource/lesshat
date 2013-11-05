### <a name="placeholder"></a> &#8226; placeholder
**Summary:**

Placeholder is the short hint displayed in the input field before the user clicked to it.
Default placeholder text in inputs has a light gray color (so far). 

Resources: **[CSS-Tricks](http://css-tricks.com/snippets/css/style-placeholder-text/)**

**Syntax:**

    .placeholder(<color>, [<element>])
  
**Example:**

    div {
     .placeholder(#666666);
    }
    
    // Result
    div::-webkit-input-placeholder {
       color: #666666;
    }
    div:-moz-placeholder {
       color: #666666;
    }
    div::-moz-placeholder {
       color: #666666;
    }
    div:-ms-input-placeholder {
       color: #666666;
    }
    
    // In root (outside of selectors)
    .placeholder(#333333);

    // Result
    ::-webkit-input-placeholder {
       color: #666666;
    }
    :-moz-placeholder {
       color: #666666;
    }
    ::-moz-placeholder {
       color: #666666;
    }
    :-ms-input-placeholder {
       color: #666666;
    }

    // In root (outside of selectors)
    .placeholder(#333333, textarea);

    // Result
    textarea::-webkit-input-placeholder {
       color: #666666;
    }
    textarea:-moz-placeholder {
       color: #666666;
    }
    textarea::-moz-placeholder {
       color: #666666;
    }
    textarea:-ms-input-placeholder {
       color: #666666;
    }


