$("document").ready(function(){
    // neo menu len top khi scroll
    let num = $('.header-sticky-wrapper').offset().top;
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.header-sticky-wrapper').addClass('fixed-sticky');
            $('.sub-categories').addClass('fix-submenu');
        }
        else {
            num = $('.header-sticky-wrapper').offset().top;
            $('.header-sticky-wrapper').removeClass('fixed-sticky');
            $('.sub-categories').removeClass('fix-submenu');
        }
    });
    //neo footer xuống bottom nếu nội dung file ngắn hơn cửa sổ
    if ($(document).height() > $('footer').offset().top) {
        $('footer').addClass('fixed');
    }
    $('.menu__all-categories').on("mouseenter", function(){
        $('.sub-categories').slideDown("slow");
    });
    $('.menu__all-categories').on("mouseleave", function() {
        if (!$('.sub-categories').is(':hover')) { 
            $('.sub-categories').slideUp("slow");
        }

    })
    $('.sub-categories').on("mouseleave", function() {
        if (!$('.menu__all-categories').is(':hover')) { 
            $('.sub-categories').slideUp("slow");
        }

    })
})