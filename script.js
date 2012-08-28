var debounce = function(func, wait, immediate) {
var timeout;
return function() {
  var context = this, args = arguments;
  var later = function() {
    timeout = null;
    if (!immediate) func.apply(context, args);
  };
  if (immediate && !timeout) func.apply(context, args);
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
};
};
	var throttle = function(func, wait) {
var context, args, timeout, throttling, more, result;
var whenDone = debounce(function(){ more = throttling = false; }, wait);
return function() {
  context = this; args = arguments;
  var later = function() {
    timeout = null;
    if (more) func.apply(context, args);
    whenDone();
  };
  if (!timeout) timeout = setTimeout(later, wait);
  if (throttling) {
    more = true;
  } else {
    result = func.apply(context, args);
  }
  whenDone();
  throttling = true;
  return result;
};
};

var lesshat = document.querySelectorAll('textarea[data-css]');
var css = document.getElementById('css');
var parser = new less.Parser;
var refresh = function(less, cssElement, ok, err)
{
	// console.log('change', e, lesshat.value);
	parser.parse('@import "lib/lesshat.less";\n'+ less, function(e, tree) {
		if (!e) {
			var code = tree.toCSS();
			// cssElement.innerText = code;
			cssElement.dataset['syntax'].setValue(code);
			console.log('code', code);
			ok && ok();
		}
		else {
			console.log('e', e);
			err && err(e);
		}
	});
};
Array.prototype.forEach.call(lesshat, function(l)
{
	var target = l.dataset['css'] && document.getElementById(l.dataset['css']);
	var editor = CodeMirror.fromTextArea(l, {
		// 'onChange': refresh,
		'onChange': throttle(function(e) {
			refresh(
				e.getValue(),
				target);
		}, 100),
		'tabSize': 2,
	});
	if (target) {
		var syntax = CodeMirror.fromTextArea(target, {
			'tabSize': 2,
			'readOnly': 'nocursor',
		});
		target.dataset['syntax'] = syntax;
	}
});