
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
