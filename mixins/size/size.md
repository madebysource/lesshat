### <a name="size"></a> &#8226; size
**Summary:**

This is helper mixin for fast dimensions setup.

**Syntax:**

    .size(<width>, [<height>]) 

**Tips and tricks:**

  When you call mixin with only one argument, second will be the same.
  Also you can omit units and `size` adds it automatically.
  
**Example:**

    div {
     .size(50);
    }
    
    // Result
    div {
     width: 50px;
     height: 50px;
    }


