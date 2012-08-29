var docs = [
	{
		name: '.animation',
		parameter: '(~"animation-1, animation-2, ..., animation-n");',
		doc: '<p>CSS3 animation according to specs: <a href="http://www.w3.org/TR/css3-animations/">W3C specification</a>, <a href="https://developer.mozilla.org/en-US/docs/CSS/animation">MDN spec</a>, <a href="https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_animations?redirectlocale=en-US&amp;redirectslug=CSS%2FCSS_animations">examples</a>.</p>',
		code: '.examp {\n'
			+ '\t.animation(~"my-animation 6s backwards 2s, my-second-animation 3s linear alternate infinite");\n'
			+ '}',
		parts: [
			{
				name: '.animation-delay',
				parameters: [
					'(1s);',
					'(~"750ms, 2s");'
				],
				w3c: 'http://www.w3.org/TR/css3-animations/#animation-delay-property',
				mdn: 'https://developer.mozilla.org/en-US/docs/CSS/animation-delay'
			},
			{
				name: '.animation-direction',
				parameters: [
					'();',
					'(~"normal, alternate");'
				],
				w3c: 'http://www.w3.org/TR/css3-animations/#animation-direction-property',
				mdn: 'https://developer.mozilla.org/en-US/docs/CSS/animation-direction'
			},
			{
				name: '.animation-duration',
				parameters: [
					'(2s);'
				],
				w3c: 'http://www.w3.org/TR/css3-animations/#animation-duration-property',
				mdn: 'https://developer.mozilla.org/en-US/docs/CSS/animation-duration'
			}
		]
	}
];

docs.map(function(doc) {
	doc.id = doc.name.replace('.', '');
	doc.parts.map(function(part, index) {
		part.isFirst = index == 0;

		var params = part.parameters;
		part.parameters = [];

		params.map(function(parameter, index) {
			part.parameters.push({ name: parameter, isFirst: index == 0 });
		});
	});
});

var source = '			<!-- this file was generated with `node docs.js > content.html` -->\n\n' +
	'{{#each this}}' +
	'			<article id="{{id}}">\n' +
	'				<h2>{{name}}\n' +
	'					<code class="mixin-sample">{{parameter}}</code>\n' +
	'				</h2>\n' +
					'{{#if parts}}{{#each parts}}{{#each parameters}}' +
	'				<code class="mixin{{#if isFirst}} {{else}} hide-name{{/if}}">\n' +
	'					<span class="mixin-name">{{../name}}</span>\n' +
	'					<span class="mixin-usage">{{name}}</span>\n' +
	'					{{#if ../w3c}}<a href="{{../w3c}}">W3C</a>\n{{/if}}' +
	'					{{#if ../mdn}}<a href="{{../mdn}}">MDN</a>\n{{/if}}' +
	'				</code>\n' +
					'{{/each}}{{/each}}{{/if}}' +
	'				<div class="code clearfix">\n' +
	'					<textarea cols="30" rows="10" data-css="code-{{id}}">{{code}}</textarea>\n' +
	'					<textarea id="code-{{id}}"></textarea>\n' +
	'				</div>\n' +
	'				<div class="detail">{{{doc}}}</div>\n' +
	'			</article>\n' +
	'{{/each}}' +
	'';

// source = '{{#each this}}{{this.name}}{{/each}}';

var handlebars = require('handlebars');

var template = handlebars.compile(source);

var result = template(docs);

// console.log(docs[0].parts);

console.log(result);