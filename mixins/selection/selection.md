### <a name="selection"></a> &#8226; selection
**Summary:**

The ::selection CSS pseudo-element applies rules to the portion of a document that has been highlighted.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)**

**Syntax:**

    .selection([<color>, <bg>, <element>, <shadow>]) 
  
**Example:**

    div {
     .selection(#CA3636);
    }
    
    // Result
    div {
     ::selection {
       color: #CA3636;
     }
     ::-moz-selection {
       color: #CA3636;
     }
    }

