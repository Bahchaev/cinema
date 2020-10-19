const getHeaderSwipper = () => {
    return new Swiper('.header__swiper-container', {
        navigation: {
            nextEl: '.header__swiper-button-next',
            prevEl: '.header__swiper-button-prev',
        },
        pagination: {
            el: '.header__swiper-pagination',
            renderBullet: function (index, className) {

                return '<span class="' + className + '"></span>';
            },
            bulletClass: "header__swiper-pagination-bullet",
            bulletActiveClass: "header__swiper-pagination-bullet-active"
        }
    });
}

module.exports = getHeaderSwipper;