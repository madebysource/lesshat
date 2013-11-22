### <a name="transition-property"></a> &#8226; transition-property
**Summary:**

The transition-property CSS property is used to specify the names of CSS properties to which a transition effect should be applied.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition-property)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)**

**Syntax:**
  
  Default value: all

    .transition-property(<propertyname> | all | none)

**Tips and tricks:**

  And also properties inside `transition-property` definition are automatically prefixed, if it is needed.  
  **W3C property value is appending all prefixed values.**  
  Why? Some browsers support W3C unprefixed properties, but values must be sometimes prefixed.
  Let's consider this example:

    div {
    -webkit-transition: -webkit-filter .3s ease;
    -moz-transition: -moz-filter .3s ease;
    -o-transition: filter .3s ease;

    // There is a problem! Webkit needs -webkit-filter property
    transition: filter .3s ease;
    }

**Example:**

    div {
     .transition-property(transform);
    }
    
    // Result
    div {
     -webkit-transition-property: -webkit-transform;
     -moz-transition-property: -moz-transform;
     -o-transition-property: -o-transform;
     transition-property: -webkit-transform,-moz-transform,-o-transform,transform;
    }


