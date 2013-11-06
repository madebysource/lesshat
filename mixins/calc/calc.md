### <a name="calc"></a> &#8226; calc
**Summary:**

The calc() CSS function can be used anywhere a `<length>`, `<frequency>`, `<angle>`, `<time>`, `<number>`, or `<integer>` is required.With calc(), you can perform calculations to determine CSS property values.  

**THIS MIXIN MUST BE INTERPOLATED ~''**  
The `-lh-property: 0` junk line of code is a neccesary sacrifice due to the hack nature of this set of mixins. (via [less-properties](https://github.com/borodean/less-properties))

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)**

**Syntax:**

    .calc(<element>, ~'<expression>')
  
**Example:**

    div {
     .calc(width, ~'100% - 33px');
    }
    
    // Result
    div {
     -lh-property: 0;
     width:-webkit-calc(100% - 33px);
     width:-moz-calc(100% - 33px);
     width:calc(100% - 33px);
    } 
