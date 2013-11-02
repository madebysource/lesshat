### <a name="background-clip"></a> &#8226; background-clip
**Summary:**

The background-clip CSS property specifies whether an element's background, either the color or image, extends underneath its border.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/background-clip)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)**

**Syntax:**

Default value: border-box

    .background-clip(<box>)
  
**Example:**

    div {
     .background-clip(padding-box);
    }
    
    // Result
    div {
     -webkit-background-clip: padding-box;
     -moz-background-clip: padding-box;
     background-clip: padding-box;
    } 


