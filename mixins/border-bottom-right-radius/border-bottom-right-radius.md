### <a name="border-bottom-right-radius"></a> &#8226; border-bottom-right-radius
**Summary:**

The border-bottom-right-radius CSS property sets the rounding of the bottom-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/border-radius)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)**

**Syntax:**

Default value: 0

    .border-bottom-right-radius(length | percentage)

**Tips and tricks:**

If you omit units, `border-bottom-right-radius` adds `px` automatically. 
If you want to use syntax like `10px \ 5px`, you have to interpolate argument `~''` or LESS CSS divides it (yeah awesome feature!).
Also LESS Hat adds `background-clip: padding-box`, because it fixes problem with older Safari. Here is some [resource](http://tumble.sneak.co.nz/post/928998513/fixing-the-background-bleed).
  
**Example:**

      div {
       .border-bottom-right-radius(10px);
      }
      
      // Result
      div {
       -webkit-border-bottom-right-radius: 10px;
       -moz-border-radius-bottomright: 10px;
       border-bottom-right-radius: 10px;
      }   


