# lesshat [![Build Status](https://travis-ci.org/madebysource/lesshat.png)](https://travis-ci.org/madebysource/lesshat)

![lesshat](https://raw.github.com/madebysource/lesshat/master/lesshat.png) ![Analytics](https://ga-beacon.appspot.com/UA-46020418-6/lesshat/readme?pixel)

---
**[Download latest](https://registry.npmjs.org/lesshat/-/lesshat-{{ version }}.tgz) |**
**[Get Started](#get-started) |**
**[Introduction](#intro) |**
**[Contribute](#contribute) |**
**[Documentation](#documentation) |**

---
### Current version: v{{ version }} {{ date }}

## <a name="get-started"></a> Get started
To use lesshat, you need [node/npm installed](https://nodejs.org/) then run `npm install lesshat --save` to install and save lesshat into your package.json.  From here, you just need to reference the `node_modules/lesshat/lesshat.less` file within any of your project less files.  You can also use the prefixed version available at `node_module/lesshat/lesshat-prefixed.less` if you're worried about mixin name conflicts with other library.

### Bower
As of version 4, lesshat has removed support for Bower by removing the build folder from the repository.  [There are many reasons that Bower is considered inadequate for dependency management](https://medium.com/@nickheiner/why-my-team-uses-npm-instead-of-bower-eecfe1b9afcb) and since people already use npm for dependency management simply to install Bower, another dependency manager, it felt a bit redundant.

Even if Bower isn't supported, it can still be used with the tarball uploaded to npm.  You can add the dependency to your bower.json file like this:

```
"dependencies": {
    "lesshat": "https://registry.npmjs.org/lesshat/-/lesshat-4.0.1.tgz"
}
```

You can also use the command line to install it by running `bower install lesshat=https://registry.npmjs.org/lesshat/-/lesshat-4.0.1.tgz --save`.

After that, you can reference the less file directly the same way as the npm version with a slight path difference. The only downside is that bower will not update automatically because it doesn't support semantic versioning with files.

*You should really consider using npm instead of bower.*

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
* **Workflow** – **No more one line editing!** We created developer friendly worklow for editing and creating mixins. You can test mixins with [MOCHA](http://mochajs.org/), generate new mixin with [GRUNT](http://gruntjs.com/). Find out more about the workflow in **[contribution](#contribution)** section.

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
1. Fork this repo
2. run `npm install`
3. If you create new mixin, please add tests and documentation on how to use it
4. Always test your changes and make sure that the documentation is being added to the README.md by running `grunt`
6. Finally, commit your changes and create a pull request


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

{{ documentation }}


## Big Thanks to:
* **[Jan Kuca](http://www.jankuca.com/)** (help us with lesshat-devstack)
* **[MOZILLA DEVELOPER NETWORK](https://developer.mozilla.org/)** (almost all summary are from MDN)
* **[CSS-Tricks](http://css-tricks.com/)** (their CSS almanac is great resource)
* **[Angular UI router](https://github.com/angular-ui/ui-router)** (example of good github profile)
* **[Marek Hrabe](https://twitter.com/marek)** (for coding lesshat.com)
* **[Jan Vu Nam](http://dribbble.com/Vucek)** (for design lesshat.com and lesshat book icon)
