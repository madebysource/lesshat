<!---
If you want to edit README file, please do it in README-template.md.
README.md file is automatically generated.
{{ documentation }} syntax is replaced by all mixins documentation from mixins folder
-->

# LESS Hat 3.0 [![Build Status](https://travis-ci.org/madebysource/lesshat.png)](https://travis-ci.org/madebysource/lesshat)

![LESS Hat 2.0](http://f.cl.ly/items/353w1A2z0u3C323J152t/Untitled-11-1.png) ![Analytics](https://ga-beacon.appspot.com/UA-46020418-6/lesshat/readme?pixel)

---
**[Download latest](https://raw.github.com/csshat/lesshat/master/build/lesshat.less)** (or **[Prefixed - great with Bootstrap](https://raw.github.com/csshat/lesshat/master/build/lesshat-prefixed.less)**) **|**
**[Get Started](#get-started) |**
**[Contribute](#contribute) |**
**[Documentation](#documentation) |**

---
### Current version: v{{ version }}

## What's new?
* Compiling LESS Hat is much more faster (up to 60× times). 
	* Here is a benchmark comparing LESS Hat 2.0.15 and LESS Hat 3. Thanks to [Pixelass](https://github.com/pixelass/more-or-less/) for this test.
	  ![](http://f.cl.ly/items/2a2Z1r1s0U3d2G1U3F3W/bench.png)
	* The main reason why LESS Hat 2.0.15 was so slow are LESS CSS Mixin Guards. LESS Hat used Mixin Guards for configurations browser prefixes. LESS Hat 3 dropped this feature. If you still want to use prefix configurations use LESS Hat 2.0.15. You can download it [here](https://github.com/csshat/lesshat/archive/v2.0.15.zip).
* A lot of bug fixes...

## Intro
Why LESS Hat? In August 2012, while we were developing and extending [CSS Hat](www.csshat.com) for LESS we needed universal mixins. Unfortunately, none of available were good enough that would satisfy our needs and that’s  why we created new custom ones on our own, which have become the most popular mixin library for the whole LESS CSS. 

After a year, there is a new, **completely rewritten 3.0 version** that brings 86 great mixins, robust workflow for editing, testing and creating new mixins.

Meet the best mixins library in the world. Thanks to the LESS Hat 3.0 is LESS CSS finally usable.

If you would like to use CSS Hat for working with LESS Hat and you still don't have one, we have a suprise for you at **[lesshat.com](http://lesshat.com)** - Check it out!

### Features
* <del>**Configuration** – You can turn off/on browser prefixes according to your needs.</del> **LESS Hat 3.0 dropped this feature. Read more in 'What's new'.**
* **No restrictions** – If it's possible in CSS, it must be possible to be done with a mixin. Unlimited number of anything, shadows, gradients, gradient swatches.
* **Standard naming convention** – In LESS Hat, mixins have names like all CSS3 properties. No `.rounded` or `.shadow`. It's stupid.
* **Cross-browser** – LESS Hat takes care of exporting CSS for all available browsers.
* **Bootstrap friendly** – You can now use prefixed LESS Hat version and gaily work with Bootstrap. Yeah it's that easy.
* **Keyframes** – Although it's tricky as hell, but yeah LESS Hat has mixin for `.keyframes`
* **Blank state ready** – If you call mixin without any arguments, LESS Hat does not pollute your CSS with empty properties. Instead LESS Hat generates nothing.
* **Workflow** – **No more one line editing!** We created developer friendly worklow for editing and creating mixins. You can test mixins with [MOCHA](http://visionmedia.github.io/mocha/), generate new mixin with [GRUNT](http://gruntjs.com/). Find out more about the workflow in **[contribution](#contribution)** section.

## <a name="get-started"></a> Get started
The structure of this repo is:  

* **build folder** – there are ready-to-use lesshat.less or lesshat-prefixed.less mixins
* **mixins folder** – developer version of mixins (more about that in **[contribution](#contribution)** section)
* **.gitignore** – is a list of files that git will ignore. I know you know that, but it's convention. 
* **.travis.yml** – Configuration file for Travis CI. Travis CI is a hosted continuous integration service for the open source community.
* **Gruntfle.js** – task runner. If you don't want to use lesshat-devstack ignore it.
* **LICENSE** – self-explanatory
* **README-template.md** – If you want to edit readme, edit it in this file. README.md is generated.
* **README.md** – please don't edit this file. Either edit README-template.md or documentation inside mixins/<mixin-name> folder.
* **Bower** – is like NPM for frontend. NPM is like Gems for JavaScript. I could go on forever…
* **package.json** – contains meta data for NPM.

### Structure of LESS Hat mixins
	
1. **Typical LESS Hat mixin**:

		.supermixin(...) {
  			@process: ~`(function(){})()`;
  			
  			-webkit-border-radius: @process;
  			border-radius: @process;
		}
	
	In @process variable is all magic. Please don't edit javascrpt directly in .less file. Instead use [lesshat-devstack](https://github.com/csshat/lesshat-devstack).
	
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
3. Now you have LESS Hat devstack (see [documentation](https://github.com/csshat/lesshat-devstack).)
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

{{ documentation }}


## Big Thanks to:
* **[Jan Kuca](http://www.jankuca.com/)** (help us with lesshat-devstack)
* **[MOZILLA DEVELOPER NETWORK](https://developer.mozilla.org/)** (almost all summary are from MDN)
* **[CSS-Tricks](http://css-tricks.com/)** (their CSS almanac is great resource)
* **[Angular UI router](https://github.com/angular-ui/ui-router)** (example of good github profile)
* **[Marek Hrabe](https://twitter.com/marek)** (for coding lesshat.com)
* **[Jan Vu Nam](http://dribbble.com/Vucek)** (for design lesshat.com and LESS Hat book icon)
