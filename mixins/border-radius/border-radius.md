### <a name="border-radius"></a> &#8226; border-radius
**Summary:**

The border-radius CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/border-radius)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)**

**Syntax:**

Default value: 0

    .border-radius(length | percentage | length / length | percentage / percentage)

**Tips and tricks:**

  If you omit units, `border-radius` adds `px` automatically. 
  If you want to use syntax like `10px \ 5px`, you have to interpolate argument `~''` or LESS CSS divides it (yeah awesome feature!).
  Also LESS Hat adds `background-clip: padding-box`, because it fixes problem with older Safari. Here is some [resource](http://tumble.sneak.co.nz/post/928998513/fixing-the-background-bleed).

**Example:**

    div {
     .border-radius(5px);
    }
    
    // Result
    div {
     -webkit-border-radius: 5px;
     -moz-border-radius: 5px;
     border-radius: 5px;
    } 


