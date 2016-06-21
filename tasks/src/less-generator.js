var uglify = require('uglify-js');
var fs = require('fs');

var LESSGenerator = function (mixin, mixin_key, desc) {
	this.mixin = mixin;
	this.mixin_key = mixin_key;
	this.desc = desc;
	
	if (!this.mixin_key) {
		throw new Error('No mixin key specified');
	}
	
	this.mixin_key_temp = this.mixin_key;
	this.vendors = this.mixin.vendors;
	
	if (!this.vendors) {
		throw new Error(this.mixin_key + '– No vendors for mixin. Please define it.');
	}
	
	this.vendors.push('w3c');
	this.conditions = false;
	this.alias = this.mixin.alias;
	this.fns = this.getFunctionMap();
};

LESSGenerator.prefixes = {
	webkit: '-webkit-',
	moz: '-moz-',
	opera: '-o-',
	ms: '-ms-',
	w3c: ''
};

LESSGenerator.fixArguments = function () {
	var args = "@{arguments}";
	args = args.replace(/^\[|\]$/g, "");
	return args;
};

LESSGenerator.fixArguments_ = function () {
	var fixer = this.fixArguments.toString();
	fixer = this.uglifyFunction(fixer);
	fixer = '(' + fixer + ')()';
	return fixer;
};

LESSGenerator.generateGlobalToggles = function () {
	var vendors = Object.keys(LESSGenerator.prefixes);
	var chunks = [];
	
	vendors.forEach(function (vendor) {
		chunks.push('@' + vendor + ': true;');
	});
	
	chunks.unshift('// Config supported browsers for your project');
	
	return chunks.join('');
};

LESSGenerator.prototype.getFunctionMap = function () {
	var mixin = this.mixin;
	
	var fns = {};
	this.vendors.forEach(function (vendor) {
		
		var fn = mixin[vendor];
		if (fn !== false && fn !== null && typeof fn !== 'undefined' && (Object.getOwnPropertyNames(fn).length > 0)) {
			fns[vendor] = fn;
		} else {
			fns['process'] = mixin;
		}
	});
	
	return fns;
};

LESSGenerator.prototype.generate = function () {
	var mixin_args = '(...) {';
	var chunks = [];
	var that = this;
	
	function mixin_generator(name, prepend) {
		
		if (prepend) {
			chunks.push(prepend);
		}
		
		chunks.push(
			'.' + name + mixin_args,
			that.generateBodies_(),
			that.generateResults_(),
			'}'
		);
	}
	
	mixin_generator(this.mixin_key);
	
	if (typeof this.alias !== 'undefined') {
		
		if (Array.isArray(this.alias)) {
			for (var i = 0, l = this.alias.length; i < l; i++) {
				mixin_generator(this.alias[i]);
			}
		} else if (typeof this.alias === 'string') {
			mixin_generator(this.alias);
		}
		
	}
	
	return chunks.join('\n');
};

LESSGenerator.prototype.generateLocalToggles_ = function () {
	var chunks = [];
	var state = true;
	var self = this;
	
	if (!this.conditions) return;
	this.vendors.forEach(function (vendor) {
		state = true;
		if (self.vendors[vendor] == false && typeof self.vendors[vendor] != 'undefined') {
			state = self.vendors[vendor];
		}
		chunks.push('  @' + vendor + '_local: ' + state + ';');
	});
	
	return chunks.join('');
};

LESSGenerator.prototype.generateBodies_ = function () {
	var mixin = this.mixin;
	var fns = this.fns;
	var process = '';
	var chunks = [];
	
	Object.keys(fns).forEach(function (vendor) {
		
		if (vendor === 'process') {
			process = '';
		} else if (typeof vendor === 'undefined') {
			process = 'process';
		} else {
			process = 'process_';
		}
		
		var fn = fns[vendor];
		var args = LESSGenerator.fixArguments_();
		var js = LESSGenerator.uglifyFunction(fn);
		js = '(' + js + ')(' + args + ')';
		js = js.replace(/`/g, '\\`');
		chunks.push('  ' +
			'@' + process + vendor + ': ~`' + js + '`;'
		);
	});
	
	return chunks.join('\n');
};

LESSGenerator.prototype.generateResults_ = function () {
	var chunks = [];
	var custom_results = null;
	var path = this.desc.path.replace(this.desc.key + '.js', '');
	
	if (typeof this.mixin.result == 'string') {
		if (!fs.existsSync(path + this.mixin.result)) {
			throw Error(this.mixin.result + ' not found.');
		}
		custom_results = fs.readFileSync(path + this.mixin.result, 'utf8');
		chunks.push(custom_results);
	} else {
		chunks.push(this.generateResultDefinitions_());
		chunks.push(this.generateResultCalls_());
	}
	
	return chunks.join('');
};

LESSGenerator.prototype.generateResultDefinitions_ = function () {
	var chunks = [];
	chunks.push(this.generatePrimaryResultDefinition_());
	chunks.push(this.generateSecondaryResultDefinition_());
	
	return chunks.join('');
};

LESSGenerator.prototype.generatePrimaryResultDefinition_ = function () {
	var prefixes = this.vendors;
	var fns = Object.keys(this.fns);
	var chunks = [];
	
	if (this.conditions) {
		// open .result() definition
		chunks.push('  ' +
			'.result (@arguments, @signal, @boolean, @local_boolean)' +
			' when (@boolean = true)' +
			' and (@local_boolean = true)' +
			' {'
		);
		
		for (var i = 0, l = prefixes.length; i < l; i++) {
			chunks.push('  ' + this.generateVendorResultInceptionJS_(prefixes[i], fns[i]));
		}
		
		chunks.push('    ' +
			'.inception(@signal, @arguments);'
		);
		
		// close .result() definition
		chunks.push('  }');
	} else {
		for (var i = 0, l = prefixes.length; i < l; i++) {
			chunks.push('  ' + this.generateVendorResultInceptionJS_(prefixes[i], fns[i]));
		}
		
	}
	
	return chunks.join('\n');
};

LESSGenerator.prototype.generateVendorResultInceptionJS_ = function (vendor, process_fn) {
	var prefix = '';
	var process = '';
	var vendor_ = (typeof process_fn === 'undefined') ? '' : process_fn;
	var appendCSS = '';
	var prependCSS = '';
	
	if (LESSGenerator.prefixes[vendor] !== undefined) {
		prefix = LESSGenerator.prefixes[vendor];
	} else {
		prefix = '-' + this.vendors[this.vendors.indexOf(vendor)] + '-';
	}
	
	if (vendor_ === 'process') {
		process = '';
	} else if (!vendor_) {
		process = 'process';
	} else {
		process = 'process_';
	}
	
	var result = '@' + process + vendor_;
	var prefixed = true;
	this.mixin_key = this.mixin_key_temp;
	
	if (this.mixin.result) {
		if (this.mixin.result.value) {
			result = this.mixin.result.value.replace(/{{\s*(\w+\s*\|?\s*\w+)\s*}}/, function (match, sub) {
				if (sub == 'escape_result') {
					result = '@{' + result.slice(1) + '}';
				}
				return result.replace(/;\s*$/g, '');
			});
		}
		if (this.mixin.result.property) {
			this.mixin_key = this.mixin.result.property;
		}
		if (this.mixin.result.prefixed == false) {
			prefixed = false;
		}
		if (this.mixin.result[vendor]) {
			if (this.mixin.result[vendor].value) {
				result = '@' + process + vendor_;
				result = this.mixin.result[vendor].value.replace(/{{\s*(\w+\s*\|?\s*\w+)\s*}}/, function (match, sub) {
					if (sub == 'escape_result') {
						result = '@{' + result.slice(1) + '}';
					}
					return result.replace(/;\s*$/g, '');
				});
			}
			if (this.mixin.result[vendor].property) {
				this.mixin_key = this.mixin.result[vendor].property;
			}
			if (this.mixin.result[vendor].prefixed == false) {
				prefixed = false;
			}
		}
	}
	result += ';';
	
	if (!prefixed) {
		prefix = '';
	}
	
	appendCSS = '';
	prependCSS = '';
	if ('appendCSS' in this.mixin) {
		if (this.mixin.appendCSS[vendor]) {
			appendCSS = ' ' + this.mixin.appendCSS[vendor].replace(/;\s*$/g, '') + '; ';
		} else if ('all' in this.mixin.appendCSS) {
			appendCSS = ' ' + this.mixin.appendCSS['all'].replace(/;\s*$/g, '') + '; ';
		}
	}
	
	if ('prependCSS' in this.mixin) {
		if (this.mixin.prependCSS[vendor]) {
			prependCSS = ' ' + this.mixin.prependCSS[vendor].replace(/;\s*$/g, '') + '; ';
		} else if ('all' in this.mixin.prependCSS) {
			prependCSS = ' ' + this.mixin.prependCSS['all'].replace(/;\s*$/g, '') + '; ';
		}
	}
	
	appendCSS.trim();
	prependCSS.trim();
	
	if (this.mixin.result) {
		if (this.mixin.result.strip) {
			prependCSS = prependCSS.replace(new RegExp(this.mixin.result.strip, 'g'), '');
			appendCSS = appendCSS.replace(new RegExp(this.mixin.result.strip, 'g'), '');
			result = result.replace(new RegExp(this.mixin.result.strip, 'g'), '');
		}
		if (this.mixin.result[vendor]) {
			if (this.mixin.result[vendor].strip) {
				prependCSS = prependCSS.replace(new RegExp(this.mixin.result[vendor].strip, 'g'), '');
				appendCSS = appendCSS.replace(new RegExp(this.mixin.result[vendor].strip, 'g'), '');
				result = result.replace(new RegExp(this.mixin.result[vendor].strip, 'g'), '');
			}
		}
	}
	
	if (this.conditions) {
		return '.inception (@signal, @arguments)' +
			' when (@signal = ' + (this.vendors.indexOf(vendor) + 1) + ') ' + 'and (isstring(@' + process + vendor_ + ')) and not (iscolor(@' + process + vendor_ + ')) and not (isnumber(@' + process + vendor_ + ')) and not (iskeyword(@' + process + vendor_ + ')) and not (isurl(@' + process + vendor_ + ')) and not (ispixel(@' + process + vendor_ + ')) and not (ispercentage(@' + process + vendor_ + ')) and not (isem(@' + process + vendor_ + '))' +
			' { ' +
			prependCSS + prefix + this.mixin_key + ': ' + result + appendCSS +
			' }' +
			'\n\t\t.inception (@signal, @arguments)' +
			' when (@signal = ' + (this.vendors.indexOf(vendor) + 1) + ') ' + 'and not (isstring(@' + process + vendor_ + ')) and not (iscolor(@' + process + vendor_ + ')) and not (isnumber(@' + process + vendor_ + ')) and not (iskeyword(@' + process + vendor_ + ')) and not (isurl(@' + process + vendor_ + ')) and not (ispixel(@' + process + vendor_ + ')) and not (ispercentage(@' + process + vendor_ + ')) and not (isem(@' + process + vendor_ + '))' +
			' {} ';
	} else {
		return prependCSS + prefix + this.mixin_key + ': ' + result + appendCSS;
	}
	
};

LESSGenerator.prototype.generateSecondaryResultDefinition_ = function () {
	var chunks = [];
	
	if (!this.conditions) return;
	chunks.push('  ' +
		'.result (@arguments, @signal, @boolean, @local_boolean)' +
		' when not (@boolean = true), not (@local_boolean = true)' +
		' {}'
	);
	
	return chunks.join('\n');
};

LESSGenerator.prototype.generateResultCalls_ = function () {
	var fns = this.fns;
	var prefixes = this.vendors;
	var chunks = [];
	
	if (!this.conditions) return;
	for (var i = 0, l = prefixes.length; i < l; i++) {
		var vendor = '@' + prefixes[i];
		if (typeof LESSGenerator.prefixes[prefixes[i]] == 'undefined') {
			vendor = true;
		}
		chunks.push('  .result(@arguments, ' + (this.vendors.indexOf(prefixes[i]) + 1) + ', ' + vendor + ', @' + prefixes[i] + '_local);');
	}
	
	return chunks.join('');
};

LESSGenerator.uglify_options = {
	dead_code: true
};

LESSGenerator.uglifyFunction = function (js) {
	js = js.toString();
	js = '(' + js + ')()';
	
	var result = uglify.minify(js, {
		fromString: true,
		mangle: true,
	});
	return result.code.replace(/^!/, '').replace(/\(\);$/, '');
};


module.exports = LESSGenerator;
