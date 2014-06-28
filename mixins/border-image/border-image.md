### <a name="border-image"></a> &#8226; border-image
**Summary:**

The border-image CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/border-radius)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image)**

**Syntax:**

Default value: based on individual properties

    .border-image(border-image-source border-image-slice border-image-width border-image-outset border-image-repeat)

**Tips and tricks:**

  If you call mixin without arguments, LESS Hat does not generate anything.
  Good border-image online [generator](http://border-image.com/).

**Example:**

    div {
     .border-image(url(border.png) 61 45 62 54 repeat);
    }
    
    // Result
    div {
     -webkit-border-image: url(border.png) 61 45 62 54 repeat;
     -moz-border-image: url(border.png) 61 45 62 54 repeat;
     -o-border-image: url(border.png) 61 45 62 54 repeat;
     border-image: url(border.png) 61 45 62 54 repeat;
    } 


