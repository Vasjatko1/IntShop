$(document).ready(function () {
    $(".header-slider").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    });
    $(".multiple-slider").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1250,
    });
    $(".catalog-slider").slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
});
$(document).ready(function () {
    $(".item-slider").slick({
        slidesToShow: 1,
        fade: true,
        asNavFor: ".item-slider-nav",
        arrows: false,
    });
    $(".item-slider-nav").slick({
        slidesToShow: 3,
        asNavFor: ".item-slider",
        arrows: true,
        focusOnSelect: true,
    });
    $(".collapsible").collapsible();
});
