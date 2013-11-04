### <a name="drop-shadow"></a> &#8226; drop-shadow
**Summary:**

Applies a drop shadow effect to the input image. A drop shadow is effectively a blurred, offset version of the input image's alpha mask drawn in a particular color, composited below the image.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#drop-shadow()">MDN</a>**

**Syntax:**

    .drop-shadow(<offset-x> <offset-y> [<blur-radius> | <spread-radius> | <color>])

**Tips and tricks:**

  If you omit units, `drop-shadow` adds `px` automatically. 
  
**Example:**

    div {
     .drop-shadow(16 16 10 black);
    }
    
    // Result
    div {
     -webkit-filter: drop-shadow(16px 16px 10px #000000);
     -moz-filter: drop-shadow(16px 16px 10px #000000);
     -ms-filter: drop-shadow(16px 16px 10px #000000);
     filter: drop-shadow(16px 16px 10px #000000);
    } 


