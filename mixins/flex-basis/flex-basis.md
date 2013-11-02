### <a name="flex-basis"></a> &#8226; flex-basis
**Summary:**

The CSS flex-basis property specifies the flex basis which is the initial main size of a flex item.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex-basis/)**

**Syntax:**

Default value: auto

    .flex-basis(<width>)

**Tips and tricks:**

  If you omit units, `flex-basis` adds `px` automatically. 
  
**Example:**

    div {
     .flex-basis(100);
    }
    
    // Result
    div {
     -webkit-flex-basis: 100;
     flex-basis: 100px;
    }


