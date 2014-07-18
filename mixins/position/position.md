### <a name="position"></a> &#8226; position
**Summary:**

This is helper mixin for fast position setup.

**Syntax:**

    .position(<position>, [<top>,<right>,<bottom>,<left>]) 

**Tips and tricks:**

  - When you call mixin with only one argument, second will be the same.
  Also you can omit units and `position` adds `px` automatically.  
  - When set `position` to `static` you will get nothing. See more: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Values).
  - You can use named variable to specify special side's offset.
  
**Example:**

    div {
     .position(absolute, 20, 30px, @left: 40px);
    }
    
    // Result
    div {
     position: absolute;
     top: 20px;
     right: 30px;
     left: 40px;
    }


