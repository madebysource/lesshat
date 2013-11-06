### <a name="font-face"></a> &#8226; font-face
**Summary:**

The @font-face CSS at-rule allows authors to specify online fonts to display text on their web pages.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)**

**Syntax:**

    .font-face(@fontname, @fontfile, @fontweight:normal, @fontstyle:normal) 
  
**Example:**

    div {
     .font-face(Hipster, ~'../fonts/hipster', bold, italic);
    }
    
    // Result
    div {
     font-family: "Hipster";
     src: url("../fonts/hipster.eot");
     src: url("../fonts/hipster.eot?#iefix") format("embedded-opentype"), url("../fonts/hipster.woff") format("woff"), url("../fonts/hipster.ttf") format("truetype"), url("../fonts/hipster.svg#Hipster") format("svg");
     font-weight: bold;
     font-style: italic;
    }


