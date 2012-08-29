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
var refresh = function(less, target, ok, err)
{
	parser.parse('@import "lib/lesshat.less";\n'+ less, function(e, tree) {
		if (!e) {
			var code = tree.toCSS();
			target.setValue(code);
			ok && ok();
		}
		else {
			err && err(e);
		}
	});
};
var errCheck = function(editor, element, err)
{
	$(element).toggleClass('error', err);
	if (err) {
		editor.setValue('Seems like there is something wrong\nwith the less code');
	}
};
Array.prototype.forEach.call(lesshat, function(l)
{
	var target = l.dataset['css'] && document.getElementById(l.dataset['css']);
	var syntax;
	var check = debounce(errCheck, 1200);
	if (target) {
		syntax = CodeMirror.fromTextArea(target, {
			'tabSize': 2,
			'readOnly': 'nocursor'
		});
	}
	var editor = CodeMirror.fromTextArea(l, {
		'onChange': throttle(function(e) {
			refresh(
				e.getValue(),
				syntax,
				function() {
					check(syntax, syntax.getWrapperElement(), false);
				},
				function(e) {
					check(syntax, syntax.getWrapperElement(), true);
				}
			);
		}, 100),
		'tabSize': 2
	});
	refresh(editor.getValue(), syntax);
});

$(document).ready(function()
{
	window.$window = $(window);
	window.$body = $(document.body);
	new Menu({container:'#menu'});
	new Section({container:'#introduction', id: 'introduction'});
	new Section({container:'#animation', id: 'animation'});
	new Section({container:'#appearance', id: 'appearance'});
	new Section({container:'#backface–visibility', id: 'backface–visibility'});
});
