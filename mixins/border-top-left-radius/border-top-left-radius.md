### <a name="border-top-left-radius"></a> &#8226; border-top-left-radius
**Summary:**

The border-top-left-radius CSS property sets the rounding of the top-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/border-top-left-radius)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)**

**Syntax:**

Default value: 0

    .border-top-left-radius(length | percentage)

**Tips and tricks:**

  If you omit units, `border-top-left-radius` adds `px` automatically. 
  If you want to use syntax like `10px \ 5px`, you have to interpolate argument `~''` or LESS CSS divides it (yeah awesome feature!).
  Also LESS Hat adds `background-clip: padding-box`, because it fixes problem with older Safari. Here is some [resource](http://tumble.sneak.co.nz/post/928998513/fixing-the-background-bleed).

**Example:**

    div {
     .border-top-left-radius(5px);
    }
    
    // Result
    div {
     -webkit-border-top-left-radius: 5px;
     -moz-border-top-left-radius: 5px;
     border-top-left-radius: 5px;
    } 


