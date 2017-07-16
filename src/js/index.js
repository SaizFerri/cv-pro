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
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.menu').addClass('__has-background');
  } else {
    $('.menu').removeClass('__has-background');
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
