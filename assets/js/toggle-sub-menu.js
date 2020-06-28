$("document").ready(function(){
      //neo footer xuống bottom nếu nội dung file ngắn hơn cửa sổ
    //   if ($(document).height() > ($('footer').offset().top + $('footer').height())) {
    //     $('footer').addClass('fixed');
    // }
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