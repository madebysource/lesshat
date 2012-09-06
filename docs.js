var docs = {
	properties: [
		// TODO: fix w3schools / w3c mishmash
		// {
		// 	name: 'Configuration',
		// 	showInMenu: true,
		// 	doc: '<p>Turn on/off prefixes for individual browsers. Useful when doing internal project, or mobile app that should only work with webkit.</p>' +
		// 		'<p>Config is global for all mixins (see the top of the file) and you can override specific mixins manually (at the beginning of every mixin).</p>',
		// 	code: '@w3schools: true; // Unprefixed W3C syntax \n'
		// 		+ '@webkit: true; // Chrome 7+, Safari 5+, iOS5, Android \n'
		// 		+ '@moz: true; //  Firefox 4+ \n'
		// 		+ '@opera: true; // Opera 10.5+ \n'
		// 		+ '@ms: true;  // IE 10+ \n'
		// 		+ '@oldWebkit: true; // iOS4, Safari 4, Chrome < 6.',
		// 	noCssTransformation: true,
		// 	parts: []
		// },

		{
			name: 'Design considerations',
			showInMenu: true,
			doc: '<p>The core feature is unlimited number of CSS properties. Because LESS language is limited in this way (see <a href="http://stackoverflow.com/questions/11419741/less-css-mixins-with-variable-number-of-arguments">Stack Overflow</a>), we are wrapping the arguments into a <strong>~"..."</code></strong> block, so that we can push them as a single parameter, and parse it back inside the mixin.</p>' +
				'<p>Because of this, every mixin needs to parse it\'s arguments, and since LESS doesn\'t allow to add globally available functions, there is a parser inside each mixin. Not a best practice, but necessary. The good thing is that you can just include the mixin library with:</p>' +
			'<code><strong>@import "lesshat";</strong></code>' +
			'<p>and enjoy coding websites again.</p>'
		},

		{
			name: 'FAQ',
			showInMenu: true,
			doc: '<p class="question">What is LESS?</p>'+
				'<p>Hey, start with official website <a href="http://lesscss.org" target="_blank">lesscss.org</a> and learn why it rocks so hard.</p>'+
				'<p class="question">What is a good practice to using LESS?</p>'+
				'<p>We don&apos;t recommended to use LESS directly in your client-side code, because it has to be compiled every time a page is viewed, but for development it&apos;s okay. You can use <a href="http://lesscss.org/#-server-side-usage">server-side</a> compiling via Node.js or some of desktop apps for example <a href="http://incident57.com/less/">LESS.app - free</a>, <a href="http://incident57.com/codekit/">Codekit - paid</a> or <a href="http://livereload.com/">LiveReload - paid</a>.</p>'+
				'<p class="question">How is LESSHat licensed?</p>'+
				'<p>LESSHat is available under the MIT and BSD licenses. You are free to use LESSHat without restriction for both open-source and closed-source applications.</p>'+
				'<p class="question">Hey LESSHat is uber cool. It really made my day. Thanks!</p>'+
				'<p>That&apos;s nice. We appreciate it. :) If you would like to support us you can <a target="_blank" href="http://twitter.com/?status=LESS Hat. An uber cool bunch of smart LESS mixins. Made by @CSSHat. %23css %23less %23mixins"><strong>tweet</strong></a> about us or give us some small Flattr donation (Flattr button is above in header section).</p>'+
				'<p class="question">I find a bug and I would like to report it. Where can I do that?</p>'+
				'<p>The best way to report a bug is using the Github <a href="https://github.com/CSSHat/LESSHat/issues" target="_blank">issues</a>.</p>'
		},

		{
			name: 'Roadmap',
			showInMenu: true,
			doc: '<ul><li>.keyframes mixin for css animation - see proposed syntax below</li>' +
				  '<li>Prefix free for .transition mixin</li>' +
				  '<li>Do you have any idea? Leave us a feedback in comment section below or on twitter <a href="http://twitter.com/CSSHat">@CSSHat</a> with hashtag #LESSHat.</li></ul>',
			code: '.keyframes(animationName\n'
				+ '\t~"0%,50% background: blue; transform: scale(.5);"\n'
				+ '\t~"100% background:red;");\n',
			noCssTransformation: true,
			parts: []

		},

		{
			name: 'Drawbacks',
			showInMenu: true,
			doc: '<p>Error reporting in LESS <a href="http://f.cl.ly/items/1M302K2y09173E3t3V2J/Screen%20Shot%202012-09-04%20at%209.32.33%20PM.png" target="_blank">sucks</a>, sorry about that. If you like to know what went wrong when you mistype, use SASS (which <a href="http://csshat.com">CSS Hat</a> does too :)).</p>'
		},

		{
			name: 'Feedback',
			showInMenu: true,
			spaceAfter: true,
			notContent: true
		},


		{
			name: '.animation',
			/*
			 parameter: ['(animation);',
			 '(~"animation-1, animation-2, ..., animation-n");'
			 ],
			 */
			parameter: '(animation) or (~"animation-1, animation-2, ..., animation-n");',
			doc: '', 
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_animation.asp', 
			mdn: 'https://developer.mozilla.org/en-US/docs/CSS/animation', 
			examples: 'https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_animations?redirectlocale=en-US&amp;redirectslug=CSS%2FCSS_animations',
			code: '.example-animation {\n'
				+ '\t.animation(~"my-animation 6s backwards 2s, my-second-animation 3s linear alternate infinite");\n'
				+ '}\n'
				+ '.example-animation-delay {\n'
				+ '\t.animation-delay(2s);\n'
				+ '\t /* OR */ \n'
				+ '\t .animation-delay(~&quot;200ms, 2s&quot;); \n'
				+ '}\n'
				+ '.example-animation-direction {\n'
				+ '\t.animation-direction();\n'
				+ '\t /* OR */ \n'
				+ '\t .animation-direction(~&quot;normal, alternate&quot;); \n'
				+ '}\n'
				+ '.example-animation-duration {\n'
				+ '\t.animation-duration(2s);\n'
				+ '\t /* OR */ \n'
				+ '\t .animation-duration(~&quot;3s, 2s&quot;); \n'
				+ '}\n'
				+ '.example-animation-timing-function {\n'
				+ '\t.animation-timing-function(ease-in-out);\n'
				+ '\t /* OR */ \n'
				+ '\t .animation-timing-function(~&quot;ease-out, ease-in&quot;); \n'
				+ '}\n'
				+ '.example-animation-iteration-count {\n'
				+ '\t.animation-iteration-count(3);\n'
				+ '\t /* OR */ \n'
				+ '\t .animation-iteration-count(~&quot;2, 6&quot;); \n'
				+ '}\n'
				+ '.example-animation-animation-name {\n'
				+ '\t.animation-name(myAnimation);\n'
				+ '\t /* OR */ \n'
				+ '\t .animation-name(~&quot;myAnimation, myAnimation2&quot;); \n'
				+ '}\n'
				+ '.example-animation-play-state {\n'
				+ '\t.animation-play-state(paused);\n'
				+ '}\n',
			parts: [
				{
					name: '.animation-delay',
					parameters: [
						'(time);',
						'(~"time-1 [, time-2, ..., time-n]");'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_animation-delay.asp'
				},
				{
					name: '.animation-direction',
					parameters: [
						'(normal|alternate);',
						'(~"normal|alternate [, normal|alternate, ...]");'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_animation-direction.asp'
				},
				{
					name: '.animation-duration',
					parameters: [
						'(time);',
						'(~"time-1 [, time-2, ..., time-n]");'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_animation-duration.asp'
				},
				{
					name: '.animation-timing-function',
					parameters: [
						'(function);',
						'(~"function-1 [, function-2, ..., function-n]");'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp'
				},
				{
					name: '.animation-iteration-count',
					parameters: [
						'(value);',
						'(~"value-1 [, value-2, ..., value-n]");'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp'
				},
				{
					name: '.animation-name',
					parameters: [
						'(name);',
						'(~"name-1 [, name-2, ..., name-n]");'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_animation-name.asp'
				},
				{
					name: '.animation-play-state',
					parameters: [
						'(paused|running);',
						'(~"paused|running [, paused|running, ..., paused|running]");'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_animation-play-state.asp'
				}
			]
		},

		{
			name: '.keyframes',
			badge: 'upcoming'
		},

		{
			name: '.appearance',
			parameter: ['(appearance);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_appearance.asp',
			code: '.example-appearance {\n'
				+ '\t.appearance(button);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.backface-visibility',
			parameter: ['(visible|hidden);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_backface-visibility.asp',
			code: '.example-backface-visibility {\n'
				+ '\t.backface-visibility(hidden);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.background-clip',
			parameter: ['(border-box|padding-box|content-box);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_background-clip.asp',
			code: '.example-background-clip {\n'
				+ '\t.background-clip(padding-box);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.background-origin',
			parameter: ['(border-box|padding-box|content-box);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_background-origin.asp">w3schools</a></p>',
			code: '.example-background-origin {\n'
				+ '\t.background-origin(content-box);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.background-size',
			/*
			 parameter: ['(size);',
			 '(~"size-1 [, size-2, ..., size-n]")'
			 ],
			 */
			parameter: '(size) or (~"size-1 [, size-2, ..., size-n]");',
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_background-size.asp',
			code: '.example-background-size {\n'
				+ '\t.background-size(cover);\n'
				+ '}\n'
				+ '\n'
				+ '.example-background-size-2 {\n'
				+ '\t.background-size(~&quot;100%, auto&quot;);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.border-radius',
			parameter: ['(radius);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_border-radius.asp',
			code: '.example-border-radius {\n'
				+ '\t.border-radius(10px);\n'
				+ '}\n'
				+ '\t/* OR */\n'
				+ '.example-border-radius-2 {\n'
				+ '\t .border-radius(0 10px 0 0); /* Only top right corner rounded */ \n'
				+ '}\n'
				+ '.example-border-top-left-radius {\n'
				+ '\t.border-top-left-radius(10px);\n'
				+ '}\n'
				+ '.example-border-top-right-radius {\n'
				+ '\t.border-top-right-radius(15px);\n'
				+ '}\n'
				+ '.example-border-bottom-left-radius {\n'
				+ '\t.border-bottom-left-radius(20px);\n'
				+ '}\n'
				+ '.example-border-bottom-right-radius {\n'
				+ '\t.border-bottom-right-radius(25px);\n'
				+ '}\n',
			parts: [
				{
					name: '.border-top-left-radius',
					parameters: [
						'(radius);'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_border-top-left-radius.asp'
				},
				{
					name: '.border-top-right-radius',
					parameters: [
						'(radius);'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_border-top-right-radius.asp'
				},
				{
					name: '.border-bottom-left-radius',
					parameters: [
						'(radius);'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_border-bottom-right-radius.asp'
				},
				{
					name: '.border-bottom-right-radius',
					parameters: [
						'(radius);'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_border-bottom-right-radius.asp'
				}
			]
		},

		{
			name: '.border-image',
			parameter: ['(source slice width outset repeat);'
			],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_border-image.asp',
			code: '.example-border-image {\n'
				+ '\t.border-image(url(border.png) 30 30 round);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.box-shadow',
			parameter: '(~"shadow-1[, shadow-2, ..., shadow-n]");',
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_box-shadow.asp',
			code: '.example-box-shadow {\n'
				+ '\t.box-shadow(~"0 1px 10px #000, inset 0 -2px 5px red");\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.box-sizing',
			parameter: ['(content-box|border-box|inherit);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_box-sizing.asp',
			code: '.example-box-sizing {\n'
				+ '\t.box-sizing(border-box);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.columns',
			parameter: ['(column-width column-count);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_columns.asp',
			code: '.example-columns {\n'
				+ '\t.columns(100px 3);\n'
				+ '}\n'
				+ '.example-column-count {\n'
				+ '\t .column-count(3); \n'
				+ '}\n'
				+ '.example-column-gap {\n'
				+ '\t.column-gap(40px);\n'
				+ '}\n'
				+ '.example-column-rule {\n'
				+ '\t.column-rule(3px outset #ff00ff);\n'
				+ '}\n'
				+ '.example-column-width {\n'
				+ '\t.column-width(100px);\n'
				+ '}\n',
			parts: [
				{
					name: '.column-count',
					parameters: [
						'(length|normal);'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_column-count.asp'
				},
				{
					name: '.column-gap',
					parameters: [
						'(number|auto);'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_column-gap.asp'
				},
				{
					name: '.column-rule',
					parameters: [
						'(column-rule-width column-rule-style column-rule-color);'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_column-rule.asp'
				},
				{
					name: '.column-width',
					parameters: [
						'(auto|length);'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_column-width.asp'
				}
			]
		},

		{
			name: '.font-face',
			parameter: ['(@fontname, @fontfile);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_font-face_rule.asp',
			code: '.example-font-face {\n'
				+ '\t.font-face(ZendaRegular, zenda-webfont);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.gradient',
			parameter: '(~"image-1[, image-2, ..., image-n]");',
			badge: 'top',
			doc: '<p>Takes multiple linear and radial gradients, generates CSS for all modern browsers including older webkit syntax (hello, iOS4!) and even <strong>SVG gradient</strong> fallback for IE9.</p>' +
				'<p>MDN docs: <a href="https://developer.mozilla.org/en-US/docs/CSS/linear-gradient?redirectlocale=en-US&redirectslug=CSS%2F-moz-linear-gradient">linear gradient</a>, <a href="https://developer.mozilla.org/en-US/docs/CSS/radial-gradient">radial gradient</a></p>',
			code: '.example-gradient {\n'
				+ '\t.gradient(~"linear-gradient(90deg, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%)");\n'
				+ '}\n'
				+ '.example-multiple-gradient {\n'
				+ '\t.gradient(~"linear-gradient(-45deg, rgba(240,183,161,1) 0%,rgba(140,51,16,1) 50%,rgba(117,34,1,1) 51%,rgba(191,110,78,1) 100%), radial-gradient(ellipse at center, #f0b7a1 0%,#8c3310 50%,#752201 51%,#bf6e4e 100%)");\n'
				+ '}\n'
				+ '.example-multiple-gradient-with-image {\n'
				+ '\t.gradient(~"url(myNiceKitty.png), linear-gradient(-45deg, rgba(240,183,161,1) 0%,rgba(140,51,16,1) 50%,rgba(117,34,1,1) 51%,rgba(191,110,78,1) 100%)");\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.opacity',
			parameter: ['(value|inherit);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_opacity.asp',
			code: '.example-opacity {\n'
				+ '\t.opacity(0.5);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.perspective',
			parameter: ['(number|none);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_perspective.asp',
			code: '.example-perspective {\n'
				+ '\t.perspective(350px);\n'
				+ '}\n'
				+ '.example-perspective-origin {\n'
				+ '\t.perspective-origin(top left);\n'
				+ '}\n',
			parts: [
				{
					name: '.perspective-origin',
					parameters: [
						'(x-axis y-axis);'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_perspective-origin.asp'
				}
			]
		},

		{
			name: '.size',
			parameter: ['(size-1 [, size-2]);'],
			doc: '<p>If you fill only first parameter, second parameter will be the same.</p>',
			code: '.example-size {\n'
				+ '\t.size(200px); /* render square */\n'
				+ '}\n'
				+ '.example-size-2 {\n'
				+ '\t.size(960px, 600px);\n'
				+ '}\n',
			parts: []
		},

		{
			name: '.transform',
			parameter: ['(none|transform-functions);'],
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_transform.asp',
			code: '.example-transform {\n'
				+ '\t.transform(~"scale(.5) translate(10px, 20px)");\n'
				+ '}\n'
				+ '.example-transform-origin {\n'
				+ '\t .transform-origin(20% 40%); \n'
				+ '}\n'
				+ '.example-transform-style {\n'
				+ '\t .transform-style(preserve-3d); \n'
				+ '}\n'
				+ '.example-translate {\n'
				+ '\t .translate(100px, 50px); \n'
				+ '}\n'
				+ '.example-translate3d {\n'
				+ '\t.translate(80px, 30px);\n'
				+ '}\n'
				+ '.example-translateX {\n'
				+ '\t.translateX(40px);\n'
				+ '}\n'
				+ '.example-translateY {\n'
				+ '\t.translateY(90px);\n'
				+ '}\n'
				+ '.example-translateZ {\n'
				+ '\t.translateZ(150px);\n'
				+ '}\n'
				+ '.example-scale {\n'
				+ '\t.scale(1.5);\n'
				+ '}\n'
				+ '.example-scale3d {\n'
				+ '\t.scale3d(1, 2, 1);\n'
				+ '}\n'
				+ '.example-scaleX {\n'
				+ '\t.scaleX(1);\n'
				+ '}\n'
				+ '.example-scaleY {\n'
				+ '\t.scaleY(1);\n'
				+ '}\n'
				+ '.example-scaleZ {\n'
				+ '\t.scaleZ(1);\n'
				+ '}\n'
				+ '.example-rotate {\n'
				+ '\t.rotate(60deg);\n'
				+ '}\n'
				+ '.example-rotate3d {\n'
				+ '\t.rotate3d(1, 2.0, 3.0, 10deg);\n'
				+ '}\n'
				+ '.example-rotateX {\n'
				+ '\t.rotateX(20deg);\n'
				+ '}\n'
				+ '.example-rotateY {\n'
				+ '\t.rotateY(35deg);\n'
				+ '}\n'
				+ '.example-rotateZ {\n'
				+ '\t.rotateZ(270deg);\n'
				+ '}\n'
				+ '.example-skew {\n'
				+ '\t.skew(20deg);\n'
				+ '}\n'
				+ '.example-skewX {\n'
				+ '\t.rotateZ(60deg);\n'
				+ '}\n'
				+ '.example-skewY {\n'
				+ '\t.rotateZ(35deg);\n'
				+ '}\n',
			parts: [
				{
					name: '.transform-origin',
					parameters: [
						'(x-axis y-axis z-axis);'
					],
					source: ''
				},
				{
					name: '.transform-style',
					parameters: [
						'(flat|preserve-3d);'
					],
					source: ''
				},
				{
					name: '.translate',
					parameters: [
						'(@x:0, @y:0);'
					],
					source: ''
				},
				{
					name: '.translate3d',
					parameters: [
						'(@x:0, @y:0, @z);'
					],
					source: ''
				},
				{
					name: '.translateX',
					parameters: [
						'(@x:0);'
					],
					source: ''
				},
				{
					name: '.translateY',
					parameters: [
						'(@y:0);'
					],
					source: ''
				},
				{
					name: '.translateZ',
					parameters: [
						'(@z:0);'
					],
					source: ''
				},
				{
					name: '.scale',
					parameters: [
						'(@x [, @y]);'
					],
					source: ''
				},
				{
					name: '.scale3d',
					parameters: [
						'(@x:1, @y:1, @z:1);'
					],
					source: ''
				},
				{
					name: '.scaleX',
					parameters: [
						'(@x:1);'
					],
					source: ''
				},
				{
					name: '.scaleY',
					parameters: [
						'(@y:1);'
					],
					source: ''
				},
				{
					name: '.scaleZ',
					parameters: [
						'(@z:1);'
					],
					source: ''
				},
				{
					name: '.rotate',
					parameters: [
						'(@angle:0);'
					],
					source: ''
				},
				{
					name: '.rotate3d',
					parameters: [
						'(@x:0, @y:0, @z: 0, @angle:0);'
					],
					source: ''
				},
				{
					name: '.rotateX',
					parameters: [
						'(@x:0);'
					],
					source: ''
				},
				{
					name: '.rotateY',
					parameters: [
						'(@y:0);'
					],
					source: ''
				},
				{
					name: '.rotateZ',
					parameters: [
						'(@z:0);'
					],
					source: ''
				},
				{
					name: '.skew',
					parameters: [
						'(@angle:0);'
					],
					source: ''
				},
				{
					name: '.skewX',
					parameters: [
						'(@angle:0);'
					],
					source: ''
				},
				{
					name: '.skewY',
					parameters: [
						'(@angle:0);'
					],
					source: ''
				}
			]
		},

		{
			name: '.transition',
			parameter: '(transition) or (~"transition-1 [, transition-2, ..., transition-n]");',
			/*
			 parameter: [ '(transition);',
			 '(~&quot;transition-1 [, transition-2, ..., transition-n]&quot;);'],
			 */
			doc: '',
			w3schools: 'http://www.w3schools.com/cssref/css3_pr_transition.asp',
			code: '.example-transition {\n'
				+ '\t.transition(color 1s ease-in-out);\n'
				+ '}\n'
				+ '.example-multiple-transition {\n'
				+ '\t .transition(~&quot;color 1s ease-in-out, width .5s 1s ease-in&quot;); \n'
				+ '}\n'
				+ '.example-transition-property {\n'
				+ '\t.transition-property(width);\n'
				+ '}\n'
				+ '.example-transition-duration {\n'
				+ '\t.transition-duration(250ms);\n'
				+ '}\n'
				+ '.example-transition-function {\n'
				+ '\t.transition-timing-function(cubic-bezier(0,0,1,1));\n'
				+ '}\n'
				+ '.example-transition-delay {\n'
				+ '\t.transition-delay(2s);\n'
				+ '}\n',
			parts: [
				{
					name: '.transition-property',
					parameters: [
						'(none|all|property);',
						'(~"property-1 [, property-2, ..., property-n]")'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_transition-property.asp'
				},
				{
					name: '.transition-duration',
					parameters: [
						'(time);',
						'(~"time-1 [, time-2, ..., time-n]")'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_transition-duration.asp'
				},
				{
					name: '.transition-timing-function',
					parameters: [
						'(function);',
						'(~"function-1 [, function-2, ..., function-n]");'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_column-rule.asp'
				},
				{
					name: '.transition-delay',
					parameters: [
						'(time);',
						'(~"time-1 [, time-2, ..., time-n]");'
					],
					source: 'http://www.w3schools.com/cssref/css3_pr_transition-delay.asp'
				}
			]
		}
	]
};

function ucfirst(str) {
	return str.substr(0, 1).toUpperCase() + str.substr(1);
}

docs.properties.map(function(doc) {
	doc.showInMenu = typeof doc.showInMenu == 'undefined' ? true : doc.showInMenu;

	doc.topMixin = doc.badge && doc.badge == 'top';
	doc.upcoming = doc.badge && doc.badge == 'upcoming';

	doc.id = doc.name && doc.name.replace('.', '').replace(' ','-').toLowerCase();
	doc.nameWithoutDot = doc.name && doc.name.replace('.', '');
	doc.nameUpperCaseFirst = doc.name && ucfirst(doc.nameWithoutDot);

	doc.hasLinks = doc.w3schools || doc.w3c || doc.mdn;

	doc.parts && doc.parts.map(function(part, index) {
		part.isFirst = index == 0;

		var params = part.parameters;
		part.parameters = [];

		params.map(function(parameter, index) {
			parameter.isFirst = index == 0;
		});
	});
});

module.exports = docs;
