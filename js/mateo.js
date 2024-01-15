$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.header').addClass("blur");
    } else {
        $(".header").removeClass("blur");
    }
});
