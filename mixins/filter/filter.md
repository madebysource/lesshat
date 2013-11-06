### <a name="filter"></a> &#8226; filter
**Summary:**

The CSS filter property provides for effects like blurring or color shifting on an element’s rendering before the element is displayed. Filters are commonly used to adjust the rendering of an image, a background, or a border.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)**

**Syntax:**

Default value: none

    .filter(<filter-function>*)
  
**Example:**

    div {
     .filter(grayscale(0.5) blur(10px));
    }
    
    // Result
    div {
     -webkit-filter: grayscale(0.5) blur(10px);
     -moz-filter: grayscale(0.5) blur(10px);
     -ms-filter: grayscale(0.5) blur(10px);
     filter: grayscale(0.5) blur(10px);
    }


