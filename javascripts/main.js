console.log('This would be the main JS file.');
/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 50
});
$('.carousel').carousel({
  interval: 2000
})

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});
