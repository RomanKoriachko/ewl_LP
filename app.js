// housing slider

$(document).ready(function () {
    $(".housing-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
    });
});

$(document).ready(function () {
    $(".review-slider").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        variableWidth: true,
    });
});
