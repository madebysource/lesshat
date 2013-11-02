### <a name="transition-property"></a> &#8226; transition-property
**Summary:**

The transition-property CSS property is used to specify the names of CSS properties to which a transition effect should be applied.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition-property)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)**

**Syntax:**
  
  Default value: all

    .transition-property(<propertyname> | all | none)

**Tips and tricks:**

  And also properties inside `transition-property` definition are automatically prefixed, if it is needed.

**Example:**

    div {
     .transition-property(box-shadow);
    }
    
    // Result
    div {
     -webkit-transition-property: -webkit-box-shadow;
     -moz-transition-property: -moz-box-shadow;
     -o-transition-property: box-shadow;
     transition-property: box-shadow;
    }


