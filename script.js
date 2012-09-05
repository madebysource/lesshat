/** Credits: underscore.js **/
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


/** mailing lib **/
Subscription =
{
	form : $('#subscription'),

	mail : $('#email'),
	
	// flash : $('.flash'),

	email : '',

	lock : false,

	error_lock : false,

	jsonp : null,
	
	init : function()
	{
		Subscription.behavior();
	},
	
	behavior : function()
	{

		Subscription.mail.blur(function(e)
		{
			Subscription.email = Subscription.mail.val();

			if ( !Subscription.check() && Subscription.lock === false )
			{
				Subscription.mail.addClass('invalid');
			}
		});

		Subscription.mail.focus(function(e)
		{
			Subscription.mail.removeClass('invalid');
		});

		Subscription.form.bind('submit', function(e)
		{
			e.preventDefault();

			if ( Subscription.error_lock === false ){

				Subscription.email = Subscription.mail.val();
				
				if ( Subscription.check() && Subscription.lock === false )
				{
					Subscription.mail.removeClass('invalid');
					Subscription.lock = true;
					Subscription.send();
				}else{
					Subscription.form.addClass('invalid');
					Subscription.mail.addClass('invalid');
					Subscription.error_lock = true;
				
					setTimeout(function()
					{
						Subscription.form.removeClass('invalid');
						Subscription.error_lock = false;
					}, 1000);
				}
			}
		});
	},
	
	check : function()
	{
		var exp = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;

		return exp.test(Subscription.email);
	},
	
	send : function()
	{
		Subscription.jsonp = new Jsonp({
			'callback': $.proxy(function(data)
			{
				Subscription.sendCallback(data);
			}, this)
		});

		Subscription.jsonp.get(Subscription.form.attr('action') + '/jsonp?' + Subscription.form.serialize());
		if (_gaq) _gaq.push(['_trackEvent','Subscription','Submit']);
	},

	sendCallback : function(data)
	{
		// Subscription.flash.addClass('active');
		// Subscription.flash.text(data.message);
		if(data.status === 'success'){
			Subscription.mail.attr('disabled', true);
			$('#submit').attr('disabled', true);
			$('#email').attr('value','');
			$('#email').attr('placeholder','Thanks for subscribing!');
		}
		else{
			$('#email').attr('value','');
		}
		
		// setTimeout(function()
		// {
		// 	Subscription.flash.removeClass('active');
		// }, 4000);
		
		Subscription.lock = false;
	}
};



var css = document.getElementById('css');
var parser = new less.Parser();
var refresh = function(less, target, ok, err)
{
	// TODO: review import
	parser.parse(less, function(e, tree) {
		if (!e) {
			var code = tree.toCSS();
			target.setValue(code);
			Section.update_sizes();
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
		editor.setValue('Seems like there is something wrong\nwith the LESS code');
	}
};

$(document).ready(function()
{
	window.$window = $(window);
	window.$body = $(document.body);
	new Menu({container:'#menu'});
	$('#main article[id]').each(function(index, el) {
		new Section({container: '#' + $(el).attr('id')});
	});

	Subscription.init();

	xhr("lib/lesshat.less", null, function(mixins) {
		var lesshatTextarea = $('textarea.less');

		lesshatTextarea.each(function(index) {
			var $textarea = $(this),
				textarea = this,
				editor;
			$textarea.addClass('cm-source');

			try {
				if ($textarea.parent(':first').hasClass('auto-convert-less')) {
					var $targetArea = $('<textarea></textarea>');
					$textarea.after($targetArea);
					$targetArea.addClass('cm-target');
					var targetArea = $targetArea.get(0);

					var syntax;
					var check = debounce(errCheck, 1200);

					if (targetArea) {
						syntax = CodeMirror.fromTextArea(targetArea, {
							'tabSize': 2,
							'readOnly': 'nocursor'
						});
					}
					editor = CodeMirror.fromTextArea(textarea, {
						'onChange': throttle(function(e) {
							refresh(
								mixins + '\n' + e.getValue(),
								syntax,
								function() {
									errCheck(syntax, syntax.getWrapperElement(), false);
									check(syntax, syntax.getWrapperElement(), false);
								},
								function(e) {
									check(syntax, syntax.getWrapperElement(), true);
								}
							);
						}, 100),
						'tabSize': 2
					});
					refresh(mixins + '\n' + editor.getValue(), syntax);
				} else {
					editor = CodeMirror.fromTextArea(textarea, {
						'tabSize': 2
					});
				}
			} catch (e) {
				console.error('Error initializing', textarea, e);
			}
		});
	}, function(e){
		console.error('Error loading lesshat mixins, please reload the page');
	});


	var $popup = $('#popup');
	var $close = $popup.find('#close');

	$('header a.download').bind('click touchstart', function(e) {
		$popup.addClass('active');
	});

	$close.bind('click touchstart', function(e) {
		$popup.removeClass('active');
	});
});

$(document).load(function()
{
	console.log('load');
});
