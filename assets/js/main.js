// main.js - jQuery required
$(function(){
  // Mobile nav toggle
  $('.mobile-toggle').on('click', function(){
    $('.nav').toggleClass('mobile-open');
    $(this).toggleClass('open');
  });

  // Smooth scroll for in-page links with offset
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if(target.length){
      var offset = target.offset().top - 14;
      $('html,body').animate({scrollTop: offset}, 540);
    }
  });

  // Add active to nav links based on pathname
  var path = location.pathname.split('/').pop() || 'index.html';
  $('.nav a').removeClass('active');
  $('.nav a').each(function(){
    var href = $(this).attr('href');
    if(href === path) $(this).addClass('active');
  });

  // Reveal simple fade-ins when visible
  function reveal(){
    $('.fade-in').each(function(){
      var top = $(this).offset().top;
      var win = $(window).scrollTop() + $(window).height();
      if(win > top + 20) $(this).addClass('show');
    });
  }
  reveal();
  $(window).on('scroll', reveal);

  // simple contact form validation (client only)
  $('#contactForm').on('submit', function(e){
    e.preventDefault();
    var name = $('#c-name').val().trim();
    var email = $('#c-email').val().trim();
    var msg = $('#c-msg').val().trim();
    if(!name || !email || !msg){
      alert('Please fill all fields.');
      return;
    }
    alert('Message ready to send (demo). Replace with real integration when ready.');
    $(this)[0].reset();
  });
});
