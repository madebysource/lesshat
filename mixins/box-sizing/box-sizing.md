### <a name="box-sizing"></a> &#8226; box-sizing
**Summary:**

The box-sizing CSS property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/box-sizing)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)**

**Syntax:**

Default value: content-box

    .box-sizing(content-box | padding-box | border-box)

**Example:**

    div {
     .box-sizing(padding-box);
    }
    
    // Result
    div {
     -webkit-box-sizing: padding-box;
     -moz-box-sizing: padding-box;
     box-sizing: padding-box;
    }


