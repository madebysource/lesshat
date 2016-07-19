<!---
If you want to edit README file, please do it in README-template.md.
README.md file is automatically generated.
{{ documentation }} syntax is replaced by all mixins documentation from mixins folder
-->
# lesshat [![Build Status](https://travis-ci.org/madebysource/lesshat.png)](https://travis-ci.org/madebysource/lesshat)

![lesshat](https://raw.github.com/madebysource/lesshat/master/lesshat.png) ![Analytics](https://ga-beacon.appspot.com/UA-46020418-6/lesshat/readme?pixel)

---
**[Download latest](https://registry.npmjs.org/lesshat/-/lesshat-4.1.0.tgz) |**
**[Get Started](#get-started) |**
**[Introduction](#intro) |**
**[Contribute](#contribute) |**
**[Documentation](#documentation) |**

---
### Current version: v4.1.0 (2016-07-19)

## <a name="get-started"></a> Get started
To use lesshat, you need [node/npm installed](https://nodejs.org/) then run `npm install lesshat --save` to install and save lesshat into your package.json.  From here, you just need to reference the `node_modules/lesshat/lesshat.less` within your 

### Bower

## <a name="intro"></a> Introduction
Why lesshat? In August 2012, while we were developing and extending [CSS Hat](www.madebysource.com) for LESS we needed universal mixins. Unfortunately, none of available were good enough that would satisfy our needs and that’s  why we created new custom ones on our own, which have become the most popular mixin library for the whole LESS CSS.

Meet the best mixins library in the world.

### Features
* **No restrictions** – If it's possible in CSS, it must be possible to be done with a mixin. Unlimited number of anything, shadows, gradients, gradient swatches.
* **Standard naming convention** – In lesshat, mixins have names like all CSS3 properties. No `.rounded` or `.shadow`. It's stupid.
* **Cross-browser** – lesshat takes care of exporting CSS for all available browsers.
* **Bootstrap friendly** – You can now use prefixed lesshat version and gaily work with Bootstrap. Yeah it's that easy.
* **Keyframes** – Although it's tricky as hell, but yeah lesshat has mixin for `.keyframes`
* **Blank state ready** – If you call mixin without any arguments, lesshat does not pollute your CSS with empty properties. Instead lesshat generates nothing.
* **Workflow** – **No more one line editing!** We created developer friendly worklow for editing and creating mixins. You can test mixins with [MOCHA](http://visionmedia.github.io/mocha/), generate new mixin with [GRUNT](http://gruntjs.com/). Find out more about the workflow in **[contribution](#contribution)** section.

### Structure of lesshat mixins

1. **Typical lesshat mixin**:

		.supermixin(...) {
  			@process: ~`(function(){})()`;

  			-webkit-border-radius: @process;
  			border-radius: @process;
		}

	In @process variable is all magic. Please don't edit javascript directly in .less file. Instead use [lesshat-devstack](https://github.com/madebysource/lesshat-devstack).

2. **Use (almost) every property without interpolation!**

	Correct mixin calling:

		.background-image(linear-gradient(to bottom, #fb83fa 0%,#e93cec 100%))

	Incorrect calling:

		.background-image(~'linear-gradient(to bottom, #fb83fa 0%,#e93cec 100%)')

	Unfortunately, there are exceptions:

		.keyframes(~'');
		.calc(~'');
		.selection(~'');

		// in some cases you have to interpolate border-radius or LESS CSS begins to play on calculator
		.border-radius(~'20px / 40px');



## <a name="contribute"></a> Contribute:
1. Download this repo.
2. NPM install.
3. Now you have lesshat devstack (see [documentation](https://github.com/madebysource/lesshat-devstack).)
4. If you create new mixin, use grunt generate command!
5. If it's possible (almost always) test the coverage for new mixins, and never break existing tests.
6. Commits should represent one logical change each. If a mixin goes through multiple iterations, squash your commits down to one.
7.  Finally, commit some code and open a pull request.


## <a name="documentation"></a> Documentation:

### List of mixins:
1. **[align-content](#align-content)** `flexbox`
2. **[align-items](#align-items)** `flexbox`
3. **[align-self](#align-self)** `flexbox`
4. **[animation](#animation)**
5. **[animation-delay](#animation-delay)**
6. **[animation-direction](#animation-direction)**
7. **[animation-duration](#animation-duration)**
8. **[animation-fill-mode](#animation-fill-mode)**
9. **[animation-iteration-count](#animation-iteration-count)**
10. **[animation-name](#animation-name)**
11. **[animation-play-state](#animation-play-state)**
12. **[animation-timing-function](#animation-timing-function)**
13. **[appearance](#appearance)**
14. **[backface-visibility](#backface-visibility)**
15. **[background-clip](#background-clip)**
16. **[background-image](#background-image)**
17. **[background-origin](#background-origin)**
18. **[background-size](#background-size)**
19. **[blur](#blur)** `filter`
20. **[border-bottom-left-radius](#border-bottom-left-radius)**
21. **[border-bottom-right-radius](#border-bottom-right-radius)**
22. **[border-image](#border-image)**
23. **[border-radius](#border-radius)**
24. **[border-top-left-radius](#border-top-left-radius)**
25. **[border-top-right-radius](#border-top-right-radius)**
26. **[box-shadow](#box-shadow)**
27. **[box-sizing](#box-sizing)**
28. **[brightness](#brightness)** `filter`
29. **[calc](#calc)**
29. **[column-count](#column-count)**
30. **[column-gap](#column-gap)**
31. **[column-rule](#column-rule)**
32. **[column-width](#column-width)**
33. **[columns](#columns)**
34. **[contrast](#contrast)** `filter`
35. **[display](#display)** `flexbox`
36. **[drop-shadow](#drop-shadow)** `filter`
37. **[filter](#filter)**
38. **[flex](#flex)** `flexbox`
39. **[flex-basis](#flex-basis)** `flexbox`
40. **[flex-direction](#flex-direction)** `flexbox`
41. **[flex-grow](#flex-grow)** `flexbox`
42. **[flex-shrink](#flex-shrink)** `flexbox`
43. **[flex-wrap](#flex-wrap)** `flexbox`
44. **[font-face](#font-face)**
45. **[grayscale](#grayscale)** `filter`
46. **[hue-rotate](#hue-rotate)** `filter`
47. **[hyphens](#hyphens)**
47. **[invert](#invert)** `filter`
48. **[justify-content](#justify-content)** `flexbox`
49. **[keyframes](#keyframes)**
50. **[opacity](#opacity)**
51. **[order](#order)**
52. **[perspective](#perspective)**
53. **[perspective-origin](#perspective-origin)**
54. **[placeholder](#placeholder)**
55. **[rotate](#rotate)** `transform`
56. **[rotate3d](#rotate3d)** `transform`
57. **[rotateX](#rotateX)** `transform`
58. **[rotateY](#rotateY)** `transform`
59. **[rotateZ](#rotateZ)** `transform`
60. **[saturate](#saturate)** `filter`
61. **[scale](#scale)** `transform`
62. **[scale3d](#scale3d)** `transform`
63. **[scaleX](#scaleX)** `transform`
64. **[scaleY](#scaleY)** `transform`
65. **[scaleZ](#scaleZ)** `transform`
66. **[selection](#selection)**
67. **[sepia](#sepia)** `filter`
68. **[size](#size)** `width, height`
69. **[skew](#skew)** `transform`
70. **[skewX](#skewX)** `transform`
71. **[skewY](#skewY)** `transform`
72. **[transform](#transform)**
73. **[transform-origin](#transform-origin)**
74. **[transform-style](#transform-style)**
75. **[transition](#transition)**
76. **[transition-delay](#transition-delay)**
77. **[transition-duration](#transition-duration)**
78. **[transition-property](#transition-property)**
79. **[transition-timing-function](#transition-timing-function)**
80. **[translate](#translate)** `transform`
81. **[translate3d](#translate3d)** `transform`
82. **[translateX](#translateX)** `transform`
83. **[translateY](#translateY)** `transform`
84. **[translateZ](#translateZ)** `transform`
85. **[user-select](#user-select)**

***

### <a name="align-content"></a> &#8226; align-content
**Summary:**

The CSS align-content property aligns a flex container's lines within the flex container when there is an extra space on the cross-axis. This property has no effect on the single line flexible boxes.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/a/align-content/)**

**Syntax:**

Default value: stretch

    .align-content(flex-start | flex-end | center | space-between | space-around | stretch)

**Example:**

    div {
     .align-content(flex-start);
    }
    
    // Result
    div {
     -webkit-align-content: flex-start;
     -ms-flex-line-pack: start;
     align-content: flex-start;
    } 



### <a name="align-items"></a> &#8226; align-items
**Summary:**

The CSS align-items property aligns flex items of the current flex line the same way as justify-content but in the perpendicular direction.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/a/align-items/)**

**Syntax:**

Default value: stretch

    .align-items(flex-start | flex-end | center | baseline | stretch)

**Example:**

    div {
     .align-items(flex-start);
    }
    
    // Result
    div {
     -webkit-box-align: flex-start;
     -moz-box-align: start;
     -webkit-align-items: start;
     -ms-flex-align: flex-start;
     align-items: flex-start;
    }
  


### <a name="align-self"></a> &#8226; align-self
**Summary:**

The align-self CSS property aligns flex items of the current flex line overriding the align-items value. If any of the flex item's cross-axis margin is set to auto, then align-self is ignored.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/a/align-self/)**

**Syntax:**

Default value: auto

    .align-self(auto | flex-start | flex-end | center | baseline | stretch)

**Example:**

    div {
     .align-self(flex-start);
    }
    
    // Result
    div {
     -webkit-align-self: flex-start;
     -ms-flex-item-align: start;
     align-self: flex-start;
    }



### <a name="animation"></a> &#8226; animation
**Summary:**

Shorthand to define a CSS animation, setting all parameters at once.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation/animation)**, **[CSS3files](http://www.css3files.com/animation/)**

**Syntax:**

Default value: none

    .animation(animation-name | animation-duration | animation-timing-function | animation-delay | animation-iteration-count | animation-direction | animation-fill-mode , […]*)

**Example:**

    div {
     .animation(nameAnimation 2s linear alternate);
    }
    
    // Result
    div {
     -webkit-animation: nameAnimation 2s linear alternate;
     -moz-animation: nameAnimation 2s linear alternate;
     -o-animation: nameAnimation 2s linear alternate;
     animation: nameAnimation 2s linear alternate;
    }



### <a name="animation-delay"></a> &#8226; animation-delay
**Summary:**

Defines a length of time to elapse before an animation starts, allowing an animation to begin execution some time after it is applied.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-delay)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)**

**Syntax:**

Default value: 0

    .animation-delay(<time>, …)
  
**Tips and tricks:**

If you omit units after time argument, `animation-delay` is trying to be smart and add properly value.

    if (time > 10) {
        time += 'ms';
      } else {
        time += 's';
      }

**Example:**

    div {
     .animation-delay(2, 200);
    }
    
    // Result
    div {
     -webkit-animation-delay: 2s, 200ms;
     -moz-animation-delay: 2s, 200ms;
     -o-animation-delay: 2s, 200ms;
     animation-delay: 2s, 200ms;
    }



### <a name="animation-direction"></a> &#8226; animation-direction
**Summary:**

The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-direction)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)**

**Syntax:**

Default value: normal

    .animation-direction(<single-animation-direction>, …)
  
**Example:**

    div {
     .animation-direction(reverse, alternate);
    }
    
    // Result
    div {
     -webkit-animation-direction: reverse, alternate;
     -moz-animation-direction: reverse, alternate;
     -o-animation-direction: reverse, alternate;
     animation-direction: reverse, alternate;
    }



### <a name="animation-duration"></a> &#8226; animation-duration
**Summary:**

The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-duration)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)**

**Syntax:**

Default value: 0

    .animation-duration(<time>, …)
  
**Tips and tricks:**

If you omit units after time argument, `animation-duration` is trying to be smart and add proper value.

    if (time > 10) {
        time += 'ms';
      } else {
        time += 's';
      }
  
**Example:**

    div {
     .animation-duration(2000);
    }
    
    // Result
    div {
     -webkit-animation-duration: 2000ms;
     -moz-animation-duration: 2000ms;
     -o-animation-duration: 2000ms;
     animation-duration: 2000ms;
    }
  


### <a name="animation-fill-mode"></a> &#8226; animation-fill-mode
**Summary:**

The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-fill-mode)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)**

**Syntax:**

Default value: none

    .animation-fill-mode(<single-animation-fill-mode>, …)
  
**Example:**

    div {
     .animation-fill-mode(forwards);
    }
    
    // Result
    div {
     -webkit-animation-fill-mode: forwards;
     -moz-animation-fill-mode: forwards;
     -o-animation-fill-mode: forwards;
     animation-fill-mode: forwards;
    }



### <a name="animation-iteration-count"></a> &#8226; animation-iteration-count
**Summary:**

The animation-iteration-count CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-iteration-count)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)**

**Syntax:**

Default value: 1

    .animation-iteration-count(<single-animation-iteration-count>, …)
  
**Example:**

    div {
     .animation-iteration-count(3);
    }
    
    // Result
    div {
     -webkit-animation-iteration-count: 3;
     -moz-animation-iteration-count: 3;
     -o-animation-iteration-count: 3;
     animation-iteration-count: 3;
    } 



### <a name="animation-name"></a> &#8226; animation-name
**Summary:**

The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-name)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)**

**Syntax:**

Default value: none

    .animation-name(<single-animation-name>, …)
  
**Example:**

    div {
     .animation-name(animation-1, animation-2);
    }
    
    // Result
    div {
     -webkit-animation-name: animation-1, animation-2;
     -moz-animation-name: animation-1, animation-2;
     -o-animation-name: animation-1, animation-2;
     animation-name: animation-1, animation-2;
    } 



### <a name="animation-play-state"></a> &#8226; animation-play-state
**Summary:**

The animation-play-state CSS property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-play-state)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)**

**Syntax:**

Default value: running

    .animation-play-state(<single-animation-play-state>, …)
  
**Example:**

    div {
     .animation-play-state(paused);
    }
    
    // Result
    div {
     -webkit-animation-play-state: paused;
     -moz-animation-play-state: paused;
     -o-animation-play-state: paused;
     animation-play-state: paused;
    } 



### <a name="animation-timing-function"></a> &#8226; animation-timing-function
**Summary:**

The animation-timing-function CSS property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/animation-timing-function)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)**

**Syntax:**

Default value: ease

    .animation-timing-function(<single-animation-timing-function>, …)
  
**Example:**

    div {
     .animation-timing-function(cubic-bezier(0.1, 0.7, 1.0, 0.1));
    }
    
    // Result
    div {
     -webkit-animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
     -moz-animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
     -o-animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
     animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
    } 



### <a name="appearance"></a> &#8226; appearance
**Summary:**

Allows changing the style of any element to platform-based interface elements or vice versa.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/appearance)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/a/appearance/)**

**Syntax:**

Default value: none

    .appearance(<appearance>)
  
**Example:**

    div {
     .appearance();
    }
    
    // Result
    div {
     -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
    } 



### <a name="backface-visibility"></a> &#8226; backface-visibility
**Summary:**

The CSS backface-visibility property determines whether or not the back face of the element is visible when facing the user. The back face of an element always is a transparent background, letting, when visible, a mirror image of the front face be displayed.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/backface-visibility)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility)**

**Syntax:**

Default value: none

    .backface-visibility(visible | hidden )
  
**Example:**

    div {
     .backface-visibility(hidden);
    }
    
    // Result
    div {
     -webkit-backface-visibility: none;
     -moz-backface-visibility: none;
     -ms-backface-visibility: none;
     -o-backface-visibility: none;
     backface-visibility: none;
    } 



### <a name="background-clip"></a> &#8226; background-clip
**Summary:**

The background-clip CSS property specifies whether an element's background, either the color or image, extends underneath its border.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/background-clip)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)**

**Syntax:**

Default value: border-box

    .background-clip(<box>)
  
**Example:**

    div {
     .background-clip(padding-box);
    }
    
    // Result
    div {
     -webkit-background-clip: padding-box;
     -moz-background-clip: padding-box;
     background-clip: padding-box;
    } 



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



### <a name="background-origin"></a> &#8226; background-origin
**Summary:**

The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/background-origin)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin)**

**Syntax:**

Default value: padding-box

    .background-origin(<box>)
  
**Example:**

      div {
       .background-origin(content-box);
      }
      
      // Result
      div {
       -webkit-background-origin: content-box;
       -moz-background-origin: content-box;
       background-origin: content-box;
      } 



### <a name="background-size"></a> &#8226; background-size
**Summary:**

The background-size CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/background-size)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)**

**Syntax:**

Default value: auto auto

    .background-size(<bg-size>, ...)

**Tips and tricks:**

If you omit units, `background-size` adds `px` automatically. 
  
**Example:**

    div {
     .background-size(cover, 100%);
    }
    
    // Result
    div {
     -webkit-background-size: cover, 100%;
     -moz-background-size: cover, 100%;
     background-size: cover, 100%;
    } 



### <a name="blur"></a> &#8226; blur (shorthand for filter property)
**Summary:**

Applies a Gaussian blur to the input image. The value of ‘radius’ defines the value of the standard deviation to the Gaussian function, or how many pixels on the screen blend into each other, so a larger value will create more blur. If no parameter is provided, then a value 0 is used. The parameter is specified as a CSS length, but does not accept percentage values.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#blur()">MDN</a>**

**Syntax:**

Default value: 0

    .blur(length)

**Tips and tricks:**

If you omit units, `blur` adds `px` automatically. 
  
**Example:**

    div {
     .blur(5px);
    }
    
    // Result
    div {
     -webkit-filter: blur(5px);
     -moz-filter: blur(5px);
     -ms-filter: blur(5px);
     filter: blur(5px);
    } 



### <a name="border-bottom-left-radius"></a> &#8226; border-bottom-left-radius
**Summary:**

The border-bottom-left-radius CSS property sets the rounding of the bottom-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/border-radius)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)**

**Syntax:**

Default value: 0

    .border-bottom-left-radius(length | percentage)

**Tips and tricks:**

If you omit units, `border-bottom-left-radius` adds `px` automatically. 
If you want to use syntax like `10px \ 5px`, you have to interpolate argument `~''` or LESS CSS divides it (yeah awesome feature!).
Also LESS Hat adds `background-clip: padding-box`, because it fixes problem with older Safari. Here is some [resource](http://tumble.sneak.co.nz/post/928998513/fixing-the-background-bleed).
  
**Example:**

    div {
     .border-bottom-left-radius(10px);
    }
    
    // Result
    div {
     -webkit-border-bottom-left-radius: 10px;
     -moz-border-radius-bottomleft: 10px;
     border-bottom-left-radius: 10px;
    }   



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



### <a name="box-shadow"></a> &#8226; box-shadow
**Summary:**

The box-shadow CSS property describes one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element. If a border-radius is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on top).

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/box-shadow)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)**

**Syntax:**

Default value: none

    .box-shadow(<offset-x> <offset-y> spread blur-radius color inset, …)

**Tips and tricks:**

  If you omit units, `box-shadow` adds `px` automatically. 

**Example:**

    div {
     .box-shadow(0 1px 10px rgba(20,20,20,0.5));
    }
    
    // Result
    div {
     -webkit-box-shadow: 0 1px 10px rgba(20,20,20,0.5);
     -moz-box-shadow: 0 1px 10px rgba(20,20,20,0.5);
     box-shadow: 0 1px 10px rgba(20,20,20,0.5);
    } 



### <a name="box-sizing"></a> &#8226; box-sizing
**Summary:**

The box-sizing CSS property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/box-sizing)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)**

**Syntax:**

Default value: content-box

    .box-sizing(content-box | padding-box | border-box)

**Example:**

    div {
     .box-sizing(padding-box);
    }
    
    // Result
    div {
     -webkit-box-sizing: padding-box;
     -moz-box-sizing: padding-box;
     box-sizing: padding-box;
    }



### <a name="brightness"></a> &#8226; brightness (shorthand for filter property)
**Summary:**

Applies a linear multiplier to input image, making it appear more or less bright. A value of 0% will create an image that is completely black. A value of 100% leaves the input unchanged. Other values are linear multipliers on the effect. Values of an amount over 100% are allowed, providing brighter results. If the ‘amount’ parameter is missing, a value of 100% is used.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#brightness()">MDN</a>**

**Syntax:**

Default value: 0

    .brightness(amount)
  
**Example:**

    div {
     .brightness(0.5);
    }
    
    // Result
    div {
     -webkit-filter: brightness(0.5);
     -moz-filter: brightness(0.5);
     -ms-filter: brightness(0.5);
     filter: brightness(0.5);
    } 



### <a name="calc"></a> &#8226; calc
**Summary:**

The calc() CSS function can be used anywhere a `<length>`, `<frequency>`, `<angle>`, `<time>`, `<number>`, or `<integer>` is required.With calc(), you can perform calculations to determine CSS property values.  

**THIS MIXIN MUST BE INTERPOLATED ~''**  
The `-lh-property: 0` junk line of code is a neccesary sacrifice due to the hack nature of this set of mixins. (via [less-properties](https://github.com/borodean/less-properties))

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)**

**Syntax:**

    .calc(<element>, ~'<expression>')
  
**Example:**

    div {
     .calc(width, ~'100% - 33px');
    }
    
    // Result
    div {
     -lh-property: 0;
     width:-webkit-calc(100% - 33px);
     width:-moz-calc(100% - 33px);
     width:calc(100% - 33px);
    } 

### <a name="column-count"></a> &#8226; column-count
**Summary:**

The column-count CSS property describes the number of columns of the element.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/column-count)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-count)**

**Syntax:**

Default value: auto

    .column-count(<number> | auto)
  
**Example:**

    div {
     .column-count(3);
    }
    
    // Result
    div {
     -webkit-column-count: 0.5;
     -moz-column-count: 0.5;
     column-count: 0.5;
    }   



### <a name="column-gap"></a> &#8226; column-gap
**Summary:**

The column-gap CSS property sets the size of the gap between columns for elements which are specified to display as a multi-column element.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/column-gap)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)**

**Syntax:**

Default value: normal

    .column-gap(<length> | normal)

**Tips and tricks:**

  If you omit units, `column-gap` adds `px` automatically. 
  
**Example:**

    div {
     .column-gap(30);
    }
    
    // Result
    div {
     -webkit-column-gap: 30px;
     -moz-column-gap: 30px;
     column-gap: 30px;
    }   



### <a name="column-rule"></a> &#8226; column-rule
**Summary:**

In multi-column layouts, the column-rule CSS property specifies a straight line, or "rule", to be drawn between each column.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/column-rule)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule)**

**Syntax:**

Default value: medium none black

    .column-rule(<column-rule-width> | <column-rule-style> | <column-rule-color>)

**Tips and tricks:**

  If you omit units, `column-rule` adds `px` automatically. 
  
**Example:**

    div {
     .column-rule(5 outset #ff00ff);
    }
    
    // Result
    div {
     -webkit-column-rule: 5px outset #ff00ff;
     -moz-column-rule: 5px outset #ff00ff;
     column-rule: 5px outset #ff00ff;
    } 



### <a name="column-width"></a> &#8226; column-width
**Summary:**

The column-width CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/column-width)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-width)**

**Syntax:**

Default value: auto

    .column-width(<length> | auto)

**Tips and tricks:**

  If you omit units, `column-width` adds `px` automatically. 
  
**Example:**

    div {
     .column-width(100px);
    }
    
    // Result
    div {
     -webkit-column-width: 100px;
     -moz-column-width: 100px;
     column-width: 100px;
    }  



### <a name="columns"></a> &#8226; columns
**Summary:**

The columns CSS property is a shorthand property allowing to set both the column-width and the column-count properties at the same time.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/columns)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)**

**Syntax:**

Default value: auto

    .columns(<column-width> | <column-count>)

**Tips and tricks:**

  If you omit units for column-width argument, `columns` adds `px` to it automatically. 
  
**Example:**

    div {
     .columns(100 3);
    }
    
    // Result
    div {
     -webkit-columns: 100px 3;
     -moz-columns: 100px 3;
     columns: 100px 3;
    } 



### <a name="contrast"></a> &#8226; contrast
**Summary:**

Adjusts the contrast of the input. A value of 0% will create an image that is completely black. A value of 100% leaves the input unchanged. Values of amount over 100% are allowed, providing results with less contrast. If the ‘amount’ parameter is missing, a value of 100% is used.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#contrast()">MDN</a>**

**Syntax:**

Default value: 100%

    .contrast(<amount>)

**Tips and tricks:**

  If you omit units, `contrast` adds `%` automatically. 
  
**Example:**

    div {
     .contrast(200);
    }
    
    // Result
    div {
     -webkit-filter: contrast(200%);
     -moz-filter: contrast(200%);
     -ms-filter: contrast(200%);
     filter: contrast(200%);
    } 



### <a name="display"></a> &#8226; display
**Summary:**

The display CSS property specifies the type of rendering box used for an element. This mixin is specifically for flexbox purpose.

Resources: **[CSS-Tricks](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)**

**Syntax:**

    .display(<flex> | <inline-flex>)
  
**Example:**

    div {
     .display(flex);
    }
    
    // Result
    div {
     display: -webkit-box;
     display: -ms-flexbox;
     display: -webkit-flex;
     display: -moz-box;
    } 



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



### <a name="flex"></a> &#8226; flex
**Summary:**

The flex CSS property specifies ability of a flex item to alter their dimensions to fill the available space. Flex items can be stretched to use available space proportional to their flex grow factor or their flex shrink factor to prevent overflow.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex/)**

**Syntax:**

Default value: 0 1 auto

    .flex(none | [ <flex-grow> <flex-shrink> | <flex-basis> ])
  
**Example:**

    div {
     .flex(1 3 100px);
    }
    
    // Result
    div {
     -webkit-box-flex: 1;
     -moz-box-flex: 1;
     -webkit-flex: 1 3 100px;
     -ms-flex: 1 3 100px;
     flex: 1 3 100px;
    }



### <a name="flex-basis"></a> &#8226; flex-basis
**Summary:**

The CSS flex-basis property specifies the flex basis which is the initial main size of a flex item.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex-basis/)**

**Syntax:**

Default value: auto

    .flex-basis(<width>)

**Tips and tricks:**

  If you omit units, `flex-basis` adds `px` automatically. 
  
**Example:**

    div {
     .flex-basis(100);
    }
    
    // Result
    div {
     -webkit-flex-basis: 100;
     flex-basis: 100px;
    }



### <a name="flex-direction"></a> &#8226; flex-direction
**Summary:**

The CSS flex-direction property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex-direction/)**

**Syntax:**

Default value: row

    .flex-direction(row | row-reverse | column | column-reverse) 
  
**Example:**

    div {
     .flex-direction(row);
    }
    
    // Result
    div {
     -webkit-box-direction: normal;
     -moz-box-direction: normal;
     -webkit-box-orient: horizontal;
     -moz-box-orient: horizontal;
     -webkit-flex-direction: row;
     -ms-flex-direction: row;
     flex-direction: row;
    }



### <a name="flex-grow"></a> &#8226; flex-grow
**Summary:**

The CSS flex-grow property specifies the flex grow factor of a flex item.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex-grow/)**

**Syntax:**

Default value: 0

    .flex-grow(<number>) 
  
**Example:**

    div {
     .flex-grow(2);
    }
    
    // Result
    div {
     -webkit-flex-grow: 2;
     flex-grow: 2;
    }



### <a name="flex-shrink"></a> &#8226; flex-shrink
**Summary:**

The CSS flex-shrink property specifies the flex shrink factor of a flex item.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex-shrink/)**

**Syntax:**

Default value: 1

    .flex-shrink(<number>) 
  
**Example:**

    div {
     .flex-shrink(2);
    }
    
    // Result
    div {
     -webkit-flex-shrink: 2;
     flex-shrink: 2;
    }



### <a name="flex-wrap"></a> &#8226; flex-wrap
**Summary:**

The CSS flex-wrap property specifies whether the children are forced into a single line or if the items can be flowed on multiple lines.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/f/flex-wrap/)**

**Syntax:**

Default value: nowrap

    .flex-wrap(nowrap | wrap | wrap-reverse) 
  
**Example:**

    div {
     .flex-wrap(wrap-reverse);
    }
    
    // Result
    div {
     -webkit-flex-wrap: 2;
     -ms-flex-wrap: 2;
     flex-wrap: 2;
    }



### <a name="font-face"></a> &#8226; font-face
**Summary:**

The @font-face CSS at-rule allows authors to specify online fonts to display text on their web pages.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)**

**Syntax:**

    .font-face(@fontname, @fontfile, @fontweight:normal, @fontstyle:normal) 
  
**Example:**

    div {
     .font-face(Hipster, ~'../fonts/hipster', bold, italic);
    }
    
    // Result
    div {
     font-family: "Hipster";
     src: url("../fonts/hipster.eot");
     src: url("../fonts/hipster.eot?#iefix") format("embedded-opentype"), url("../fonts/hipster.woff") format("woff"), url("../fonts/hipster.ttf") format("truetype"), url("../fonts/hipster.svg#Hipster") format("svg");
     font-weight: bold;
     font-style: italic;
    }



### <a name="grayscale"></a> &#8226; grayscale
**Summary:**

Converts the input image to grayscale. The value of ‘amount’ defines the proportion of the conversion. A value of 100% is completely grayscale. A value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. If the ‘amount’ parameter is missing, a value of 100% is used.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#grayscale()">MDN</a>**

**Syntax:**

Default value: 0

    .grayscale(<percentage>) 

**Tips and tricks:**

  If you omit units, `grayscale` adds `%` automatically. 
  
**Example:**

    div {
     .grayscale(50);
    }
    
    // Result
    div {
     -webkit-filter: grayscale(50%);
     -moz-filter: grayscale(50%);
     -ms-filter: grayscale(50%);
     filter: grayscale(50%);
    }



### <a name="hue-rotate"></a> &#8226; hue-rotate
**Summary:**

Applies a hue rotation on the input image. The value of ‘angle’ defines the number of degrees around the color circle the input samples will be adjusted. A value of 0deg leaves the input unchanged. If the ‘angle’ parameter is missing, a value of 0deg is used. Maximum value is 360deg.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#hue-rotate()">MDN</a>**

**Syntax:**

Default value: 0

    .hue-rotate(<percentage>) 

**Tips and tricks:**

  If you omit units, `hue-rotate` adds `deg` automatically. 
  
**Example:**

    div {
     .hue-rotate(50);
    }
    
    // Result
    div {
     -webkit-filter: hue-rotate(50deg);
     -moz-filter: hue-rotate(50deg);
     -ms-filter: hue-rotate(50deg);
     filter: hue-rotate(50deg);
    }



### <a name="hyphens"></a> &#8226; hyphens
**Summary:**

The hyphens CSS property tells the browser how to go about splitting words to improve the layout of text when line-wrapping. 

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)**

**Syntax:**

Default value: manual

    .hyphens(none | manual | auto)
  
**Example:**

    div {
     .hyphens(none);
    }
    
    // Result
    div {
     -webkit-hyphens: none;
     -moz-hyphens: none;
     -ms-hyphens: none;
    } 

### <a name="invert"></a> &#8226; invert
**Summary:**

Inverts the samples in the input image. The value of ‘amount’ defines the proportion of the conversion. A value of 100% is completely inverted. A value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. If the ‘amount’ parameter is missing, a value of 100% is used.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#invert()">MDN</a>**

**Syntax:**

Default value: 0

    .invert(<percentage>) 

**Tips and tricks:**

  If you omit units, `invert` adds `%` automatically. 
  
**Example:**

    div {
     .invert(100);
    }
    
    // Result
    div {
     -webkit-filter: invert(100%);
     -moz-filter: invert(100%);
     -ms-filter: invert(100%);
     filter: invert(100%);
    }



### <a name="justify-content"></a> &#8226; justify-content
**Summary:**

The CSS justify-content property defines how a browser distributes available space between and around elements when aligning flex items in the main-axis of the current line. 

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/j/justify-content/)**

**Syntax:**

Default value: flex-start

    .justify-content(flex-start | flex-end | center | space-between | space-around) 
  
**Example:**

    div {
     .justify-content(flex-start);
    }
    
    // Result
    div {
     -webkit-box-pack: flex-start;
     -moz-box-pack: start;
     -webkit-justify-content: start;
     -ms-flex-pack: flex-start;
     justify-content: flex-start;
    }



### <a name="keyframes"></a> &#8226; keyframes
**Summary:**

The @keyframes CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation.  
  
LESS CSS isn't great for complicated mixin like this one, so it's little bit tricky.
LESS CSS compiler doesn't allow to have properties in the root. It's better to understand the problem on the example.

    // There is no selector
    color: red;
  
    SyntaxError: properties must be inside selector blocks, they cannot be in the root. 
  
    div { color: red; } // This is correct

Therefore LESS Hat generates **placeholder** selector `lesshat-selector { -lh-property: 0; }` with unknown property, which browsers ignore and after that, there is actually keyframes syntax.  
  
And also because of bad architecture of LESS CSS language, keyframes definition has to be on single line.

**THIS MIXIN MUST BE INTERPOLATED `~''`**

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/atrules/@keyframes)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)**

**Syntax:**

    .keyframes(~'<keyframes-name>, <keyframes-definition>') 

**Tips and tricks:**

  Properties inside `<keyframes-definition>` are automatically prefixed, if it's needed.  
  Keyframes mixin supports prefix configuration but it's computationally demanding so it is commented out and all prefixes are rendered. Feel free to uncommented that if you need it.
  
**Example:**

    .keyframes(~'animationName, 0%{ transform: scale(1.5); color: blue; } 100%{ transform: scale(2); color: red }');
    
    // Result
     lesshat-selector {-lh-property: 0; } 
     @-webkit-keyframes animationName{ 0%{ -webkit-transform: scale(1.5); color: blue; } 100%{ -webkit-transform: scale(2); color: red }}
     @-moz-keyframes animationName{ 0%{ -moz-transform: scale(1.5); color: blue; } 100%{ -moz-transform: scale(2); color: red }}
     @-o-keyframes animationName{ 0%{ -o-transform: scale(1.5); color: blue; } 100%{ -o-transform: scale(2); color: red }}
     @keyframes animationName{ 0%{ transform: scale(1.5); color: blue; } 100%{ transform: scale(2); color: red };} 



### <a name="opacity"></a> &#8226; opacity
**Summary:**

The opacity CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid.  

This is not shorthand method for filter opacity.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)**

**Syntax:**

Default value: 1

    .opacity(<number>) 

**Tips and tricks:**

  You can enable old filter syntax for IE6, just set `@ms_local: true`.
  
**Example:**

    div {
     .opacity(.5);
    }
    
    // Result
    div {
     -webkit-opacity: 0.5;
     -moz-opacity: 0.5;
     opacity: 0.5;
    }



### <a name="order"></a> &#8226; order
**Summary:**

The CSS order property specifies the order used to lay out flex items in their flex container.  

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/order)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/o/order/)**

**Syntax:**

Default value: 0

    .order(<integer>) 
  
**Example:**

    div {
     .order(1);
    }
    
    // Result
    div {
     -webkit-box-ordinal-group: 1;
     -moz-box-ordinal-group: 1;
     -ms-flex-order: 1;
     -webkit-order: 1;
     order: 1;
    }



### <a name="perspective"></a> &#8226; perspective
**Summary:**

The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/p/perspective/)**

**Syntax:**

Default value: none

    .perspective(none | <length>)

**Tips and tricks:**

  If you omit units, `perspective` adds `px` automatically.  
  
**Example:**

    div {
     .perspective(1000);
    }
    
    // Result
    div {
     -moz-perspective: 1000px;
     -webkit-perspective: 1000px;
     perspective: 1000px;
    }



### <a name="perspective-origin"></a> &#8226; perspective-origin
**Summary:**

The perspective-origin CSS property determines the position the viewer is looking at. It is used as the vanishing point by the perspective property.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)**, **[CSS-Tricks](http://css-tricks.com/almanac/properties/p/perspective-origin/)**

**Syntax:**

Default value: 50% 50%

    .perspective-origin(<percentage> | <length> | constants | inherit)

**Tips and tricks:**

  If you omit units, `perspective-origin` adds `%` automatically.  
  
**Example:**

    div {
     .perspective-origin(top left);
    }
    
    // Result
    div {
     -moz-perspective-origin: top left;
     -webkit-perspective-origin: top left;
     perspective-origin: top left;
    }



### <a name="placeholder"></a> &#8226; placeholder
**Summary:**

Placeholder is the short hint displayed in the input field before the user clicked to it.
Default placeholder text in inputs has a light gray color (so far). 

Resources: **[CSS-Tricks](http://css-tricks.com/snippets/css/style-placeholder-text/)**

**Syntax:**

    .placeholder(<color>, [<element>])
  
**Example:**

    div {
     .placeholder(#666666);
    }
    
    // Result
    div::-webkit-input-placeholder {
       color: #666666;
    }
    div:-moz-placeholder {
       color: #666666;
    }
    div::-moz-placeholder {
       color: #666666;
    }
    div:-ms-input-placeholder {
       color: #666666;
    }
    
    // In root (outside of selectors)
    .placeholder(#333333);

    // Result
    ::-webkit-input-placeholder {
       color: #666666;
    }
    :-moz-placeholder {
       color: #666666;
    }
    ::-moz-placeholder {
       color: #666666;
    }
    :-ms-input-placeholder {
       color: #666666;
    }

    // In root (outside of selectors)
    .placeholder(#333333, textarea);

    // Result
    textarea::-webkit-input-placeholder {
       color: #666666;
    }
    textarea:-moz-placeholder {
       color: #666666;
    }
    textarea::-moz-placeholder {
       color: #666666;
    }
    textarea:-ms-input-placeholder {
       color: #666666;
    }



### <a name="rotate"></a> &#8226; rotate
**Summary:**

Rotates the element clockwise around its origin by the specified angle. 

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#rotate)**

**Syntax:**

Default value: 0

    .rotate(<angle>)

**Tips and tricks:**

  If you omit units, `rotate` adds `deg` automatically.  
  
**Example:**

    div {
     .rotate(45);
    }
    
    // Result
    div {
     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);
    }


### <a name="rotate3d"></a> &#8226; rotate3d
**Summary:**

The rotate3d()CSS function defines a transformation that moves the element around a fixed axe without deforming it.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#rotate3d()">MDN</a>**

**Syntax:**

Default value: 0, 0, 0, 0

    .rotate3d(<number>, <number>, <number>, <angle>)

**Tips and tricks:**

  If you omit angle unit, `rotate3d` adds `deg` automatically.  
  
**Example:**

    div {
     .rotate3d(1, 0, 0, 50);
    }
    
    // Result
    div {
     -webkit-transform: rotate3d(1, 0, 0, 50deg);
     -moz-transform: rotate3d(1, 0, 0, 50deg);
     -ms-transform: rotate3d(1, 0, 0, 50deg);
     -o-transform: rotate3d(1, 0, 0, 50deg);
     transform: rotate3d(1, 0, 0, 50deg);
    }



### <a name="rotateX"></a> &#8226; rotateX
**Summary:**

The rotateX() CSS function defines a transformation that moves the element around the abscissa without deforming it.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#rotateX)**

**Syntax:**

Default value: 0

    .rotateX(<angle>)

**Tips and tricks:**

  If you omit units, `rotateX` adds `deg` automatically.  
  
**Example:**

    div {
     .rotateX(45);
    }
    
    // Result
    div {
     -webkit-transform: rotateX(45deg);
     -moz-transform: rotateX(45deg);
     -ms-transform: rotateX(45deg);
     -o-transform: rotateX(45deg);
     transform: rotateX(45deg);
    }


### <a name="rotateY"></a> &#8226; rotateY
**Summary:**

The rotateY() CSS function defines a transformation that moves the element around the ordinate without deforming it.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#rotateY)**

**Syntax:**

Default value: 0

    .rotateY(<angle>)

**Tips and tricks:**

  If you omit units, `rotateY` adds `deg` automatically.  
  
**Example:**

    div {
     .rotateY(45);
    }
    
    // Result
    div {
     -webkit-transform: rotateY(45deg);
     -moz-transform: rotateY(45deg);
     -ms-transform: rotateY(45deg);
     -o-transform: rotateY(45deg);
     transform: rotateY(45deg);
    }


### <a name="rotateZ"></a> &#8226; rotateZ
**Summary:**

The rotateZ() CSS function defines a transformation that moves the element around the z-axis without deforming it.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#rotateZ)**

**Syntax:**

Default value: 0

    .rotateZ(<angle>)

**Tips and tricks:**

  If you omit units, `rotateZ` adds `deg` automatically.  
  
**Example:**

    div {
     .rotateZ(45);
    }
    
    // Result
    div {
     -webkit-transform: rotateZ(45deg);
     -moz-transform: rotateZ(45deg);
     -ms-transform: rotateZ(45deg);
     -o-transform: rotateZ(45deg);
     transform: rotateZ(45deg);
    }

  

### <a name="saturate"></a> &#8226; saturate
  **Summary:**

  Saturates the input image. The value of ‘amount’ defines the proportion of the conversion.

  Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#saturate()">MDN</a>**

  **Syntax:**

  Default value: 100%

    .saturate(<amount>)

  **Tips and tricks:**

  If you omit units, `saturate` adds `%` automatically.  
    
  **Example:**

    div {
     .saturate(45);
    }
    
    // Result
    div {
     -webkit-filter: saturate(45deg);
     -moz-filter: saturate(45deg);
     -ms-filter: saturate(45deg);
     filter: saturate(45deg);
    }



### <a name="scale"></a> &#8226; scale
**Summary:**

Specifies a 2D scaling operation described by [sx, sy]. If sy isn't specified, it is assumed to be equal to sx.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#scale)**

**Syntax:**

Default value: 1

    .scale(<sx>[, <sy>]) 
  
**Example:**

    div {
     .scale(2);
    }
    
    // Result
    div {
     -webkit-transform: scale(2);
     -moz-transform: scale(2);
     -ms-transform: scale(2);
     -o-transform: scale(2);
     transform: scale(2);
    }


### <a name="scale3d"></a> &#8226; scale3d
**Summary:**

The scale3d() CSS function modifies the size of an element. Because the amount of scaling is defined by a vector, it can resize different dimensions at different scales.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scale3d()">MDN</a>**

**Syntax:**

Default value: 1, 1, 1

    .scale3d(<sx>, <sy>, <sz>) 
  
**Example:**

    div {
     .scale3d(1.5, .2, 3);
    }
    
    // Result
    div {
     -webkit-transform: scale3d(1.5, 0.2, 3);
     -moz-transform: scale3d(1.5, 0.2, 3);
     -ms-transform: scale3d(1.5, 0.2, 3);
     -o-transform: scale3d(1.5, 0.2, 3);
     transform: scale3d(1.5, 0.2, 3);
    }



### <a name="scaleX"></a> &#8226; scaleX
**Summary:**

Specifies a scale operation using the vector [sx, 1].

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#scaleX)**

**Syntax:**

Default value: 1

    .scaleX(<sx>) 
  
**Example:**

    div {
     .scaleX(1.5);
    }
    
    // Result
    div {
     -webkit-transform: scaleX(1.5);
     -moz-transform: scaleX(1.5);
     -ms-transform: scaleX(1.5);
     -o-transform: scaleX(1.5);
     transform: scaleX(1.5);
    }


### <a name="scaleY"></a> &#8226; scaleY
**Summary:**

Specifies a scale operation using the vector [1, sy].

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#scaleY)**

**Syntax:**

Default value: 1

    .scaleY(<sy>) 
  
**Example:**

    div {
     .scaleY(1.5);
    }
    
    // Result
    div {
     -webkit-transform: scaleY(1.5);
     -moz-transform: scaleY(1.5);
     -ms-transform: scaleY(1.5);
     -o-transform: scaleY(1.5);
     transform: scaleY(1.5);
    }


### <a name="scaleZ"></a> &#8226; scaleZ
**Summary:**

The scaleZ() CSS function modifies the z-coordinate of each element point by a constant facto, except if this scale factor is 1, in which case the function is the identity transform.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scaleZ()">MDN</a>**

**Syntax:**

Default value: 1

    .scaleZ(<sz>) 
  
**Example:**

    div {
     .scaleZ(1.5);
    }
    
    // Result
    div {
     -webkit-transform: scaleZ(1.5);
     -moz-transform: scaleZ(1.5);
     -ms-transform: scaleZ(1.5);
     -o-transform: scaleZ(1.5);
     transform: scaleZ(1.5);
    }



### <a name="selection"></a> &#8226; selection
**Summary:**

The ::selection CSS pseudo-element applies rules to the portion of a document that has been highlighted.
LESS CSS compiler doesn't allow to have properties in the root. It's better to understand the problem on the example.

    // There is no selector
    color: red;
  
    SyntaxError: properties must be inside selector blocks, they cannot be in the root. 
  
    div { color: red; } // This is correct

Therefore LESS Hat generates **placeholder** selector `lesshat-selector { -lh-property: 0; }` with unknown property, which browsers ignore and after that, there is actually selection syntax.    
  
**THIS MIXIN MUST BE INTERPOLATED `~''`**  
  
Use this mixin outside of CSS selectors

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)**

**Syntax:**

    .selection(<CSS properties>[, <element>]) 
  
**Example:**

    .selection(~'color: blue; background: red');
    
    // Result
    lesshat-selector {-lh-property: 0;} 
    ::selection{color: blue; background: red}
    ::-moz-selection{color: blue; background: red;}



### <a name="sepia"></a> &#8226; sepia
**Summary:**

Converts the input image to Instagram like effect.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter#sepia()">MDN</a>**

**Syntax:**

    .sepia(<percentage>) 

**Tips and tricks:**

  If you omit units, `sepia` adds `%` automatically.  
  
**Example:**

    div {
     .sepia(50);
    }
    
    // Result
    div {
     -webkit-filter: sepia(50%);
     -moz-filter: sepia(50%);
     filter: sepia(50%);
    }



### <a name="size"></a> &#8226; size
**Summary:**

This is helper mixin for fast dimensions setup.

**Syntax:**

    .size(<width>, [<height>]) 

**Tips and tricks:**

  When you call mixin with only one argument, second will be the same.
  Also you can omit units and `size` adds it automatically.
  
**Example:**

    div {
     .size(50);
    }
    
    // Result
    div {
     width: 50px;
     height: 50px;
    }



### <a name="skew"></a> &#8226; skew
**Summary:**

Skews the element along the X and Y axes by the specified angles. If ay isn't provided, no skew is performed on the Y axis.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#skew)**

**Syntax:**
  
  Default value: 0

    .skew(<ax>[, <ay>]) 

**Tips and tricks:**

  If you omit units, `skew` adds `%` automatically. 
  
**Example:**

    div {
     .skew(20, 30);
    }
    
    // Result
    div {
     -webkit-transform: skew(20deg, 30deg);
     -moz-transform: skew(20deg, 30deg);
     -ms-transform: skew(20deg, 30deg);
     -o-transform: skew(20deg, 30deg);
     transform: skew(20deg, 30deg);
    }


### <a name="skewX"></a> &#8226; skewX
**Summary:**

Skews the element along the X axis by the given angle.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#skewX)**

**Syntax:**
  
  Default value: 0

    .skewX(<angle>) 

**Tips and tricks:**

  If you omit units, `skewX` adds `%` automatically. 
  
**Example:**

    div {
     .skewX(20);
    }
    
    // Result
    div {
     -webkit-transform: skewX(20deg);
     -moz-transform: skewX(20deg);
     -ms-transform: skewX(20deg);
     -o-transform: skewX(20deg);
     transform: skewX(20deg);
    }


### <a name="skewY"></a> &#8226; skewY
**Summary:**

Skews the element along the Y axis by the given angle.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#skewY)**

**Syntax:**
  
  Default value: 0

    .skewY(<angle>) 

**Tips and tricks:**

  If you omit units, `skewY` adds `%` automatically. 
  
**Example:**

    div {
     .skewY(20);
    }
    
    // Result
    div {
     -webkit-transform: skewY(20deg);
     -moz-transform: skewY(20deg);
     -ms-transform: skewY(20deg);
     -o-transform: skewY(20deg);
     transform: skewY(20deg);
    }



### <a name="transform"></a> &#8226; transform
**Summary:**

The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. 

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transform)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)**

**Syntax:**
  
  Default value: none

    .transform(none | <transform-function>+) 

**Tips and tricks:**

  If you omit units, `transform` can adds correct unit automatically.

     translate: 'px',
     rotate: 'deg',
     rotate3d: 'deg',
     skew: 'deg'
  
**Example:**

    div {
     .transform(scale(.5) translate(10, 20));
    }
    
    // Result
    div {
     -webkit-transform: scale(.5) translate(10, 20);
     -moz-transform: scale(.5) translate(10, 20);
     -ms-transform: scale(.5) translate(10, 20);
     -o-transform: scale(.5) translate(10, 20);
     transform: scale(.5) translate(10, 20);
    }



### <a name="transform-origin"></a> &#8226; transform-origin
**Summary:**

The transform-origin CSS property lets you modify the origin for transformations of an element.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transform-origin)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)**

**Syntax:**
  
  Default value: 50% 50% 0

    .transform-origin(<percentage> | <length> | <named-position>) 

**Tips and tricks:**

  If you omit units, `transform-origin` adds `%` automatically.
  
**Example:**

    div {
     .transform-origin(50 50);
    }
    
    // Result
    div {
     -webkit-transform-origin: 50% 50%;
     -moz-transform-origin: 50% 50%;
     -ms-transform-origin: 50% 50%;
     -o-transform-origin: 50% 50%;
     transform-origin: 50% 50%;
    }



### <a name="transform-style"></a> &#8226; transform-style
**Summary:**

The transform-style CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transform-style)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)**

**Syntax:**
  
  Default value: flat

    .transform-style(flat | preserve-3d) 
  
**Example:**

    div {
     .transform-style(preserve-3d);
    }
    
    // Result
    div {
     -webkit-transform-style: preserve-3d;
     -moz-transform-style: preserve-3d;
     -ms-transform-style: preserve-3d;
     -o-transform-style: preserve-3d;
     transform-style: preserve-3d;
    }



### <a name="transition"></a> &#8226; transition
**Summary:**

The CSS transition property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It allows to define the transition between two states of an element.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)**

**Syntax:**
  
  Default value: all 0 ease 0

    .transition([ none | <single-transition-property> ] | <time> | <timing-function> | <time>)

**Tips and tricks:**

  If you omit units after time argument, `transition` is trying to be smart and add properly value.

      if (time > 10) {
          time += 'ms';
        } else {
          time += 's';
        }

  And also properties inside `transition` definition are automatically prefixed, if it is needed.  
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
     .transition(box-shadow 0.2s linear, color .4s .2s ease);
    }
    
    // Result
    div {
     -webkit-transition: -webkit-box-shadow 0.2s linear, color 0.4s 0.2s ease;
     -moz-transition: -moz-box-shadow 0.2s linear, color 0.4s 0.2s ease;
     -o-transition: box-shadow 0.2s linear, color 0.4s 0.2s ease;
     transition: box-shadow 0.2s linear, color 0.4s 0.2s ease;
    }



### <a name="transition-delay"></a> &#8226; transition-delay
**Summary:**

The transition-delay CSS property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition-delay)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)**

**Syntax:**
  
  Default value: 0

    .transition-delay(<time>)

**Tips and tricks:**

  If you omit units after time argument, `transition-delay` is trying to be smart and add properly value.

      if (time > 10) {
          time += 'ms';
        } else {
          time += 's';
        }

**Example:**

    div {
     .transition-delay(200);
    }
    
    // Result
    div {
     -webkit-transition-delay: 200ms;
     -moz-transition-delay: 200ms;
     -o-transition-delay: 200ms;
     transition-delay: 200ms;
    }



### <a name="transition-duration"></a> &#8226; transition-duration
**Summary:**

The transition-duration CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition-duration)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)**

**Syntax:**
  
  Default value: 0

    .transition-duration(<time>)

**Tips and tricks:**

  If you omit units after time argument, `transition-duration` is trying to be smart and add properly value.

      if (time > 10) {
          time += 'ms';
        } else {
          time += 's';
        }

**Example:**

    div {
     .transition-duration(6);
    }
    
    // Result
    div {
     -webkit-transition-duration: 6s;
     -moz-transition-duration: 6s;
     -o-transition-duration: 6s;
     transition-duration: 6s;
    }



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



### <a name="transition-timing-function"></a> &#8226; transition-timing-function
**Summary:**

The CSS transition-timing-function property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/properties/transition-timing-function)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)**

**Syntax:**
  
  Default value: ease

    .transition-timing-function(<timing-function>, ...)

**Example:**

    div {
     .transition-timing-function(cubic-bezier(0,0,1,1), ease);
    }
    
    // Result
    div {
     -webkit-transition-timing-function: cubic-bezier(0, 0, 1, 1), ease;
     -moz-transition-timing-function: cubic-bezier(0, 0, 1, 1), ease;
     -o-transition-timing-function: cubic-bezier(0, 0, 1, 1), ease;
     transition-timing-function: cubic-bezier(0, 0, 1, 1), ease;
    }



### <a name="translate"></a> &#8226; translate
**Summary:**

Specifies a 2D translation by the vector [tx, ty]. If ty isn't specified, its value is assumed to be zero.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#translate)**

**Syntax:**
  
  Default value: 0

    .translate(<tx>[, <ty>])

**Tips and tricks:**

  If you omit units, `translate` adds `px` automatically.

**Example:**

    div {
     .translate(200);
    }
    
    // Result
    div {
     -webkit-transform: translate(200px);
     -moz-transform: translate(200px);
     -ms-transform: translate(200px);
     -o-transform: translate(200px);
     transform: translate(200px);
    }


### <a name="translate3d"></a> &#8226; translate3d
**Summary:**

The translate3d() CSS function moves the position of the element in the 3D space.

Resources: **<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#translate3d()">MDN</a>**

**Syntax:**
  
  Default value: 0

    .translate3d(<tx>, <ty>, <tz>)

**Tips and tricks:**

  If you omit units, `translate3d` adds `px` automatically.

**Example:**

    div {
     .translate3d(20, 30, 10);
    }
    
    // Result
    div {
     -webkit-transform: translate3d(20px, 30px, 10px);
     -moz-transform: translate3d(20px, 30px, 10px);
     -ms-transform: translate3d(20px, 30px, 10px);
     -o-transform: translate3d(20px, 30px, 10px);
     transform: translate3d(20px, 30px, 10px);
    }



### <a name="translateX"></a> &#8226; translateX
**Summary:**

Translates the element by the given amount along the X axis.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#translateX)**

**Syntax:**
  
  Default value: 0

    .translateX(<tx>)

**Tips and tricks:**

  If you omit units, `translateX` adds `px` automatically.

**Example:**

    div {
     .translateX(20);
    }
    
    // Result
    div {
     -webkit-transform: translateX(20px);
     -moz-transform: translateX(20px);
     -ms-transform: translateX(20px);
     -o-transform: translateX(20px);
     transform: translateX(20px);
    }


### <a name="translateY"></a> &#8226; translateY
**Summary:**

Translates the element by the given amount along the Y axis.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#translateY)**

**Syntax:**
  
  Default value: 0

    .translateY(<ty>)

**Tips and tricks:**

  If you omit units, `translateY` adds `px` automatically.

**Example:**

    div {
     .translateY(20);
    }
    
    // Result
    div {
     -webkit-transform: translateY(20px);
     -moz-transform: translateY(20px);
     -ms-transform: translateY(20px);
     -o-transform: translateY(20px);
     transform: translateY(20px);
    }


### <a name="translateZ"></a> &#8226; translateZ
**Summary:**

Translates the element by the given amount along the Z axis.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#translateZ)**

**Syntax:**
  
  Default value: 0

    .translateZ(<ty>)

**Tips and tricks:**

  If you omit units, `translateZ` adds `px` automatically.

**Example:**

    div {
     .translateZ(20);
    }
    
    // Result
    div {
     -webkit-transform: translateZ(20px);
     -moz-transform: translateZ(20px);
     -ms-transform: translateZ(20px);
     -o-transform: translateZ(20px);
     transform: translateZ(20px);
    }



### <a name="user-select"></a> &#8226; user-select
**Summary:**

Controls the appearance (only) of selection.

Resources: **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)**

**Syntax:**
  
  Default value: auto

    .user-select(none | text | all | element)

**Example:**

    div {
     .user-select(none);
    }
    
    // Result
    div {
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
    }



## Big Thanks to:
* **[Jan Kuca](http://www.jankuca.com/)** (help us with lesshat-devstack)
* **[MOZILLA DEVELOPER NETWORK](https://developer.mozilla.org/)** (almost all summary are from MDN)
* **[CSS-Tricks](http://css-tricks.com/)** (their CSS almanac is great resource)
* **[Angular UI router](https://github.com/angular-ui/ui-router)** (example of good github profile)
* **[Marek Hrabe](https://twitter.com/marek)** (for coding lesshat.com)
* **[Jan Vu Nam](http://dribbble.com/Vucek)** (for design lesshat.com and lesshat book icon)
