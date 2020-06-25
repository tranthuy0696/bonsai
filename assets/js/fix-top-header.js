$("document").ready(function(){
    // neo menu len top khi scroll
    let num = $('.header-sticky-wrapper').offset().top;
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            console.log('add')
            $('.header-sticky-wrapper').addClass('fixed-sticky');
            $('.sub-categories').addClass('fix-submenu');
        }
        else {
            console.log('remove')
            num = $('.header-sticky-wrapper').offset().top;
            $('.header-sticky-wrapper').removeClass('fixed-sticky');
            $('.sub-categories').removeClass('fix-submenu');
        }
    });
  
})