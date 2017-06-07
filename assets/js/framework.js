/**
 * --------------------------------------------------------------------------
 * FRAMEWORK WORKFLOW SCRIPTS
 * --------------------------------------------------------------------------
 */

// ## ## ## ##  ANCHOR  ## ## ## ## //
$('.scroll').click(function(e) {
  var nav = $(this).attr('data-href').replace('#','');

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash); 
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');  
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// ## ## ## ##  ACCORDION  ## ## ## ## //
$('.accordion .title').click(function(e) {
    speed = 500;

    e.preventDefault();
  
    var $this = $(this);

    if ($this.next().hasClass('in')) {
        $this.next().removeClass('in');
        $this.next().slideUp(speed);
    } else {
        $this.parent().parent().find('.content').removeClass('in');
        $this.parent().parent().find('.content').slideUp(speed);
        $this.next().toggleClass('in');
        $this.next().slideToggle(speed);
    }
});

// ## ## ## ##  MODAL  ## ## ## ## //
var modal = $('a[data-modal]'),
    modalBG = $('.modal-bg'),
    btCloseModal = $('.close-modal');

function OpenModal(e) {
    e.preventDefault();
    var modalLocation = $(this).attr('data-modal');
    $('#'+modalLocation).fadeIn();
    $(modalBG).fadeIn();
}

function CloseModal(e) {
    e.preventDefault();
    $(modalBG).fadeOut();
    $('.modal').fadeOut();
}

$(modal).bind("click", OpenModal);
$(modalBG).bind("click", CloseModal);
$(btCloseModal).bind("click", CloseModal);

// ## ## ## ##  CAROUSEL  ## ## ## ## //
$('.carousel').slick();