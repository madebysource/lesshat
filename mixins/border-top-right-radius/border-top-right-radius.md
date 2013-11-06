### <a name="border-top-right-radius"></a> &#8226; border-top-right-radius
**Summary:**

The border-top-right-radius CSS property sets the rounding of the top-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/border-top-right-radius)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)**

**Syntax:**

Default value: 0

    .border-top-right-radius(length | percentage)

**Tips and tricks:**

  If you omit units, `border-top-right-radius` adds `px` automatically. 
  If you want to use syntax like `10px \ 5px`, you have to interpolate argument `~''` or LESS CSS divides it (yeah awesome feature!).
  Also LESS Hat adds `background-clip: padding-box`, because it fixes problem with older Safari. Here is some [resource](http://tumble.sneak.co.nz/post/928998513/fixing-the-background-bleed).

**Example:**

    div {
     .border-top-right-radius(5px);
    }
    
    // Result
    div {
     -webkit-border-top-right-radius: 5px;
     -moz-border-top-right-radius: 5px;
     border-top-right-radius: 5px;
    } 


