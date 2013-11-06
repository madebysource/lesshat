### <a name="box-shadow"></a> &#8226; box-shadow
**Summary:**

The box-shadow CSS property describes one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element. If a border-radius is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on top).

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/box-shadow)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)**

**Syntax:**

Default value: none

    .box-shadow(offset-x offset-y blur-radius color, offset-x offset-y blur-radius color)

**Tips and tricks:**

  If you omit units, `box-shadow` adds `px` automatically. 

**Example:**

    div {
     .box-shadow(0 1px 10px rgba(20,20,20,0.5));
    }
    
    // Result
    div {
     -webkit-box-shadow: 0 1px 10px rgba(20,20,20,0.5);
     -moz-box-shadow: 0 1px 10px rgba(20,20,20,0.5);
     box-shadow: 0 1px 10px rgba(20,20,20,0.5);
    } 


