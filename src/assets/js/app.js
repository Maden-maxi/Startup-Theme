$(document).foundation();
$(document).ready(function () {
    var carouselOptions = {
        cellAlign: "left",
        pageDots: false,
        contain: true,
        wrapAround: false,
        autoPlay: 10000,
        arrowShape: {
            x0: 20,
            x1: 55, y1: 40,
            x2: 70, y2: 40,
            x3: 35
        }
    };
    $(".members-carousel").flickity(carouselOptions);
});
