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
	}
});

$(window).resize(function() {
	if ($(window).width() < 768) {
		$('.description').css({ "padding-top": "0" });
		$('.picture-div').css({ "padding-top": "50px" });
	} else {
		$('.description').css({ "padding-top": "100px" });
		$('.picture-div').css({ "padding-top": "100px" });
	}
});

$(window).scroll(function() {
  /* if ($(this).scrollTop() > 0) {
    $('.menu').addClass('__has-background');
  } else {
    $('.menu').removeClass('__has-background');
  } */
	var currentScroll = $(this).scrollTop();
	var menu = $('.menu');

	if (currentScroll > lastScroll) {
		menu.addClass('menu-hidden');
	} else {
		menu.removeClass('menu-hidden');
	}

	lastScroll = currentScroll;
	console.log(currentScroll);

});

$('.toggle-btn').click(function() {
  $('.responsive-menu').toggleClass('is-open');
  $('.toggle-btn').toggleClass('menu-opened');

});

$('.responsive-menu-close').click(function() {
  $('.responsive-menu').toggleClass('is-open');
  setTimeout(function() {
    $('.toggle-btn').toggleClass('menu-opened');
  }, 300)

})
