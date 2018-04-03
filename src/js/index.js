(function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w=$(window);
    $.fn.visible = function(partial,hidden,direction,container){

        if (this.length < 1)
            return;

	// Set direction default to 'both'.
	direction = direction || 'both';

        var $t          = this.length > 1 ? this.eq(0) : this,
						isContained = typeof container !== 'undefined' && container !== null,
						$c				  = isContained ? $(container) : $w,
						wPosition        = isContained ? $c.position() : 0,
            t           = $t.get(0),
            vpWidth     = $c.outerWidth(),
            vpHeight    = $c.outerHeight(),
            clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
												rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
												rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
												rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
												rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
												rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
												rec.left >= 0 && rec.left <  vpWidth,
                rViz = isContained ?
												rec.right - wPosition.left > 0  && rec.right < vpWidth + wPosition.left  :
												rec.right > 0 && rec.right <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz,
		vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop 				= isContained ? 0 : wPosition,
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $c.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                position          = $t.position(),
                _top            = position.top,
                _bottom         = _top + $t.height(),
                _left           = position.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);

/**Actual Javascript **/

var lastScroll = 0;

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
	});

	if ($(window).width() < 768) {
		$('.description').css({ "padding-top": "0" });
		$('.picture-div').css({ "padding-top": "50px" });
		$('.header').css('height', '100%');
	}
});

$(window).resize(function() {
	if ($(window).width() < 768) {
		$('.description').css({ "padding-top": "0" });
		$('.picture-div').css({ "padding-top": "50px" });
		$('.header').css({ "height": "100%" });
	} else {
		$('.description').css({ "padding-top": "100px" });
		$('.picture-div').css({ "padding-top": "100px" });
		$('.header').css({ "height": "100vh" });
	}
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.menu').addClass('__has-background');
  } else {
    $('.menu').removeClass('__has-background');
  }
	var currentScroll = $(this).scrollTop();
	var menu = $('.menu');

	if (currentScroll > lastScroll) {
		menu.addClass('menu-hidden');
	} else {
		menu.removeClass('menu-hidden');
	}

	lastScroll = currentScroll;

	// Animations

	if ($('.first_image').visible(true)) {
		$('.left_image').addClass('animated fadeInLeft');
		$('.right_image').addClass('animated fadeInRight');
	}

	if ($('.sesb').visible(true)) {
		$('.sesb').addClass('animated fadeInRight');
	}

	if ($('.htw').visible(true)) {
		$('.htw').addClass('animated fadeInLeft');
	}

	if ($('.htw1').visible(true)) {
		$('.htw1').addClass('animated fadeInLeft');
	}

	if ($('.easy').visible(true)) {
		$('.easy').addClass('animated fadeInRight');
	}

	if ($('.click').visible(true)) {
		$('.click').addClass('animated fadeInLeft');
	}

	if ($('.click1').visible(true)) {
		$('.click1').addClass('animated fadeInLeft');
	}

	if ($('.language__animation').visible(true)) {
		$('.language__animation').addClass('animated fadeIn');
	}

	if ($('.github').visible(true)) {
		$('.github').addClass('animated fadeInLeft');
	}

	if ($('.contact__animation').visible(true)) {
		$('.contact__animation').addClass('animated fadeIn');
	}

});

$('.toggle-btn').click(function() {
  $('.responsive-menu').toggleClass('is-open');
  $('.toggle-btn').toggleClass('menu-opened');
	$('.invisible__menu').toggleClass('menu-opened');
});

$('.invisible__menu').click(function() {
	console.log('hello');
  $('.responsive-menu').toggleClass('is-open');
  $('.toggle-btn').toggleClass('menu-opened');
	$('.invisible__menu').toggleClass('menu-opened');
});

$('.responsive-menu-close').click(function() {
  $('.responsive-menu').toggleClass('is-open');
  setTimeout(function() {
    $('.toggle-btn').toggleClass('menu-opened');
		$('.invisible__menu').toggleClass('menu-opened');
  }, 300)
});
