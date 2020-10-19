const getNewsSwipper = () => {
    return new Swiper('.news__swiper-container', {
        spaceBetween: 20,
        slidesPerView: "auto",
        navigation: {
            nextEl: '.news__swiper-button-next',
            prevEl: '.news__swiper-button-prev',
        },
    });
};

module.exports = getNewsSwipper;