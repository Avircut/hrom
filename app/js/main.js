$('.accordion').accordion({
  heightStyle: 'content',
  header: '> .faq__question > .faq__heading',
  collapsible: true,
  active:false
});

$(document).ready(function() {
  $list = $('.header .nav__menu-item');
  $list.each((index, el) => {
    $clone = $(el).clone(true);
    $clone
    .removeClass('nav__menu-item')
    .addClass('burger__menu-item')
    $clone    
    .children('a')
    .addClass('burger__menu-link')
    .removeClass('nav__menu-link');
    $('.burger__menu').append($clone);
  });
  $socials = $('.header .socials');
  $socials = $socials.clone(true);
  $socials = $socials.addClass('burger__socials');
  $socials = $socials.removeClass('nav__socials');
  $('.burger__menu-wrapper').append($socials);
  $phone = $('.header .nav__phone');
  $phone = $phone.clone(true);
  $phone = $phone.removeClass('btn-wrapper_blue').addClass('btn-wrapper_yellow').addClass('burger__phone');
  $('.burger__menu-wrapper').append($phone);
  $('.burger__menu-wrapper a').on('click', () => {
    $('.nav__burger').toggleClass('active');
    $('.burger__menu-wrapper').toggleClass('burger__menu-wrapper_opened');
  })
});

$('.nav__burger').on('click', () => {
  $('.nav__burger').toggleClass('active');
  $('.burger__menu-wrapper').toggleClass('burger__menu-wrapper_opened');
});

// Smooth scrolling

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-65
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Clip header to top on scroll
  document.addEventListener('scroll', (e) => {
    if(window.scrollY >100){
      $('.header').addClass('top');
    } else{
      $('.header').removeClass('top');
    }
  })
function validate(form){

}
const forms = document.querySelectorAll('.form');
const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
forms.forEach((el) => {
  const btn = el.querySelector('.form__btn');
  btn.addEventListener('click', () => {
    const inputs = el.elements;
    const name = inputs['name'].value;
    const phone = inputs['phone'].value;
    let msg = el.querySelector('.form__validate-text');
    if(!regex.test(phone) && name==''){
      msg.innerHTML='Введите, пожалуйста, имя и номер телефона';
    } else if(name==''){
      msg.innerHTML='Введите, пожалуйста, имя';
    }
    else if(!regex.test(phone)){
      msg.innerHTML='Введите, пожалуйста, корректный номер телефона';
    }
    else{
    el.submit();
    }
  })
})
$('.form').on("submit", function() {
  let form = $(this);
  $.ajax({
    url: 'email.php',
    method:form.attr('method'),
    data: form.serialize(),
    success: function(result){
      if(result == 'success'){
        $('.form__validate-text').text('Успешно отправлено письмо');
      }
      else{
        $('.form__validate-text').text('Произошла ошибка при отправке');
      }
    }
  })
  return false;
})