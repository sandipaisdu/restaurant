$(document).ready(function() {


    //for mobile menu
    $('#nav').slicknav();


    $('.nivo_light').nivoLightbox();


    //jquery dropdown menu
    $('ul#nav ul.sub-menu').css('opacity', 0.0);
    $('ul#nav li').hover(function() {
            $(this).find('.sub-menu').stop().animate({
                opacity: 1
            });
        },
        function() {
            $(this).find('.sub-menu').stop().animate({
                opacity: 0
            });
        });

    //#link animation on scrolling on same page
    /*$('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 2000);
       return false;
      }
    }
  });
	  
	  */
    //


    //stick menu
    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = $('#sticky_menu').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function() {
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) {
            $('#sticky_menu').css({
                'position': 'fixed',
                'top': 0,
                'left': 0
            });
        } else {
            $('#sticky_menu').css({
                'position': 'relative'
            });
        }
    };

    // run our function on load
    sticky_navigation();

    // and run it again every time you scroll
    $(window).scroll(function() {
        sticky_navigation();
    });


    //one page nav have to be activated #3 30 min

    //owl carousel
    $("#owl-demo").owlCarousel({
        items: 4,
        lazyLoad: true,
        navigation: true
    });

    //pricing table
    $(".single_table").hover(function() {
        $(".single_table").removeClass("active");
        $(this).addClass("active");
    });

});