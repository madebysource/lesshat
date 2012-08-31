/**
* Based on Slide class from pitch.csspiffle.com
* @author: Tomas Ruzicka aka Zuse
*/

var Section = function(opt)
{
	this.$window = $(window);
	this.$container = null;
	this.id = null;
	if ( typeof opt === 'object' )
	{
		if ( opt.container )
		{
			this.$container = $(opt.container);
		}
		else throw new ArgumentError('You need to suply a container element');

		if ( opt.id )
			this.id = opt.id;
		else
		{
			this.id = this.$container.attr('id');
		}

	}
	else throw TypeError('Wrong option parameter');

	this.init();
};
Section.EVENT_VIEW = 'SECTION_VIEW';
Section.EVENT_EXIT = 'SECTION_EXIT';
Section.SECTIONS_HEIGHT = 0;
Section.WINDOW_HEIGHT = 0;
Section.update_sizes = function()
{
	Section.SECTIONS_HEIGHT = $body.height();
	Section.WINDOW_HEIGHT = $window.height();
};
Section.prototype.init = function()
{
	var self = this;
	this.$window.bind('scroll', function(e)
	{
		if ( self.mainView() )
		{
			if ( self.lastMainViewCheck )
				return;

			self.lastMainViewCheck = true;
			self.$container.addClass('viewed active');
			if ( self.id )
				self.$window.triggerHandler(Section.EVENT_VIEW, self.id);
		}
		else if ( self.lastMainViewCheck )
		{
			self.lastMainViewCheck = false;
			self.$container.removeClass('active');
			if ( self.id )
				self.$window.triggerHandler(Section.EVENT_EXIT, self.id);
		}
	});

	this.lastMainViewCheck = false;
	this.windowHeight = this.$window.height();
	this.containerHeight = this.$container.outerHeight();
	this.containerOffset = this.$container.offset();

	var diff = this.containerHeight / 2 - this.windowHeight / 2;
	// In case the content is taller than viewport, scroll to the beginning
	if ( diff > 0 )
		diff = -150;
	this.containerScroll = this.containerOffset.top + diff;

	this.$container.data('section', this);
};
// Detects whether the section is the main user focus
Section.prototype.mainView = function()
{
	var top = this.$window.scrollTop(),
		// center of the user view, getting close to the bottom as user approaches to the bottom
		viewPortMiddle = top + Section.WINDOW_HEIGHT
			- Math.min(Section.WINDOW_HEIGHT, Section.SECTIONS_HEIGHT - top - Section.WINDOW_HEIGHT) / 2 - /*threshold*/40;

	console.log('viewPortMiddle', viewPortMiddle, top, viewPortMiddle === top + Section.WINDOW_HEIGHT / 2 ? '=' : '', viewPortMiddle < top + Section.WINDOW_HEIGHT / 2 ? '<' : '');
	console.log('height', Section.SECTIONS_HEIGHT, Section.WINDOW_HEIGHT);

	$lol = $('#lol');
	if (!$lol.length)
	$lol = $('<div>').attr('id', 'lol').css({
		position:'absolute',left:0,width:'400px',height:'2px',background:'red'
	}).appendTo($body);
	$lol.css({'top':viewPortMiddle});

	return viewPortMiddle >= this.containerOffset.top && this.containerOffset.top + this.containerHeight > viewPortMiddle;
};
Section.prototype.scrollIntoView = function()
{
	Anchor.scrollTo(this.containerScroll);
};
