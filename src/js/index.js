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
	//console.log(currentScroll);

	// Animations
	var left_image = $('.first_image').offset().top - (currentScroll + 900);
	var sesb = $('.sesb').offset().top - (currentScroll + 100);
	var htw = $('.htw').offset().top - 1000;
	var htw1 = $('.htw1').offset().top - 1000;
	var easy = $('.easy').offset().top - 1000;
	var click = $('.click').offset().top - 1000;
	var click1 = $('.click1').offset().top - 1000;
	var language__animation = $('.language__animation').offset().top - 1000;
	var github = $('.github').offset().top - 1000;
	var contact__animation = $('.contact__animation').offset().top - 1000;

	if ($(this).scrollTop() > left_image) {
		$('.left_image').addClass('animated fadeInLeft');
	}

	if ($(this).scrollTop() > left_image) {
		$('.right_image').addClass('animated fadeInRight');
	}

	if ($(this).scrollTop() > sesb) {
		$('.sesb').addClass('animated fadeInLeft');
	}

	if ($(this).scrollTop() > htw) {
		$('.htw').addClass('animated fadeInRight');
	}

	if ($(this).scrollTop() > htw1) {
		$('.htw1').addClass('animated fadeInRight');
	}

	if ($(this).scrollTop() > easy) {
		$('.easy').addClass('animated fadeInLeft');
	}

	if ($(this).scrollTop() > click) {
		$('.click').addClass('animated fadeInRight');
	}

	if ($(this).scrollTop() > click1) {
		$('.click1').addClass('animated fadeInRight');
	}

	if ($(this).scrollTop() > language__animation) {
		$('.language__animation').addClass('animated fadeIn');
	}

	if ($(this).scrollTop() > github) {
		$('.github').addClass('animated fadeInLeft');
	}

	if ($(this).scrollTop() > contact__animation) {
		$('.contact__animation').addClass('animated fadeIn');
	}

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
