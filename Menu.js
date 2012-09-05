/**
* Based on Menu class from pitch.csspiffle.com
* @author: Tomas Ruzicka aka Zuse
*/

var Menu = function(opt) {
	this.$window = $(window);
	this.$menu = null;
	this.active = null;

	if ( typeof opt === 'object' )
	{
		if ( opt.container )
		{
			this.$menu = $(opt.container);
		}
		else throw new ArgumentError('You need to suply a container element');

	}
	else throw new TypeError('Wrong option parameter');

	this.init();
};

Menu.FIXED_TRESHOLD = $('header').outerHeight();

Menu.prototype.init = function() {
	var self = this;
	this.$window.bind(Section.EVENT_VIEW, function(e, id) {
		self.setActive(id);
	});
	this.$window.bind(Section.EVENT_EXIT, function(e, id) {
		self.setInactive(id);
	});
	this.$menu.on('click touchstart', 'a', function(e){
		console.log($(this).attr('href'));
		// (?:intro|problem|solution|demo|use_cases|team)
		Anchor.handleClick.apply(this, arguments);
	});

	// Menu fixation
	this.$window.bind('scroll', function (e) {
		var top = self.$window.scrollTop();
		
		self.$menu
			.toggleClass('fixed', top >= Menu.FIXED_TRESHOLD);
	});
	this.$window.bind('resize', function (e) {
		Menu.FIXED_TRESHOLD = $('header').outerHeight();
	});
};

Menu.prototype.setInactive = function(id) {
	this.active = null;
	this.$menu.find(id ? 'a[href="#' + id + '"]' : 'a.active')
		.removeClass('active');
};

Menu.prototype.setActive = function(id) {
	if ( this.active === id )
		return;
	
	this.active = id;
	this.$menu.find('a[href="#' + id + '"]')
		.addClass('active')
		.siblings()
			.removeClass('active');

	this.moveIntoView(id);
};

Menu.prototype.moveIntoView = function(id) {
	var $menu = this.$menu,
		$item = this.$menu.find('a[href="#' + id + '"]').parent();
	var offset = $item.offset();
	var top = $window.scrollTop();
	var animate = function(y) {
		$menu
			.stop() // cancel pending
			.animate({'scrollTop': $menu.scrollTop() + y}, 500);
	};
	if (offset.top < top) {
		animate(- top + offset.top);
	}
	else if (offset.top + $item.height() > top + $window.height()) {
		animate(offset.top + $item.height() - top - $window.height());
	}
};
