$("document").ready(function(){
    // neo menu len top khi scroll
    let num = $('.header-sticky-wrapper').offset().top;
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.header-sticky-wrapper').addClass('fixed-sticky');
        }
        else {
            num = $('.header-sticky-wrapper').offset().top;
            $('.header-sticky-wrapper').removeClass('fixed-sticky');
        }
    });
})