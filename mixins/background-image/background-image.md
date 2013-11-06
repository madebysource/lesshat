### <a name="background-image"></a> &#8226; background-image
**Summary:**

With the background-image you can create prefixed linear or radial gradients. The CSS (linear|radial)-gradient() function creates an `<image>` which represents a linear|radial gradient of colors. The result of this function is an object of the CSS `<gradient>` data type. Like any other gradient, a CSS linear gradient is not a CSS `<color>` but an image with no intrinsic dimensions; that is, it has neither natural or preferred size, nor ratio. Its concrete size will match the one of the element it applies to.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/functions/linear-gradient)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)**

**Syntax:**

Default value: none

    .background-image(<gradient>, ...)

**Tips and tricks:**

The `background-image` mixin is the most robust mixin of all.     
It generates `SVG` for Internet Explorer 9, old webkit, moz and opera syntax.  
Always use W3C syntax for the mixin. It can recalculate angle for older syntax, transform `to top` to `bottom` syntax and it can omit SVG syntax if it's impossible to express SVG e.g. when you call mixin with 55deg.  
If you call mixin without arguments, LESS Hat does not generate anything.  
Great online gradient [generator](http://www.colorzilla.com/gradient-editor/).

  
**Example:**

    div {
     .background-image(linear-gradient(to bottom, #fb83fa 0%,#e93cec 100%));
    }
    
    // Result
    div {
     background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmYjgzZmEiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2U5M2NlYyIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
     background-image: -webkit-linear-gradient(top, #fb83fa 0%, #e93cec 100%);
     background-image: -moz-linear-gradient(top, #fb83fa 0%, #e93cec 100%);
     background-image: -o-linear-gradient(top, #fb83fa 0%, #e93cec 100%);
     background-image: linear-gradient(to bottom, #fb83fa 0%, #e93cec 100%);
    }


