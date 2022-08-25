document.addEventListener("DOMContentLoaded", () => {

    const accordionsWrapper = document.querySelectorAll('.accordion-container')
    accordionsWrapper.forEach(el => {

        const accordions = el.querySelectorAll(".accordion");

        const openAccordion = (accordion) => {
            const content = accordion.querySelector(".accordion__content");
            const icon = accordion.querySelector(".bx");
            const iconWrap = accordion.querySelector(".accordion__intro-btn");
            accordion.classList.add("accordion__active");
            iconWrap.classList.add('acc_icon_active');
            content.style.maxHeight = content.scrollHeight + "px";
        };

        const closeAccordion = (accordion) => {
            const content = accordion.querySelector(".accordion__content");
            const icon = accordion.querySelector(".bx");
            const iconWrap = accordion.querySelector(".accordion__intro-btn");
            accordion.classList.remove("accordion__active");
            iconWrap.classList.remove('acc_icon_active');
            content.style.maxHeight = null;
        };

        accordions.forEach((accordion) => {
            const intro = accordion.querySelector(".accordion__intro");
            const content = accordion.querySelector(".accordion__content");
            intro.addEventListener('click', () => {
                if (content.style.maxHeight) {
                    closeAccordion(accordion);
                } else {
                    accordions.forEach((accordion) => {
                        closeAccordion(accordion);
                    });
                    openAccordion(accordion);
                }
            })
        });
    })

    const catalogPrice = document.querySelector('.catalog__price #price');
    const priceFrom = document.querySelector('#price-from')
    const priceTo = document.querySelector('#price-to')
    if (catalogPrice) {
        noUiSlider.create(catalogPrice, {
            start: [20, 80],
            connect: true,
            format: {
                from: function (value) {
                    return parseInt(value);
                },
                to: function (value) {
                    return parseInt(value);
                }
            },
            range: {
                'min': 0,
                'max': 100
            }
        });
        catalogPrice.noUiSlider.on('update', function (values) {
            priceFrom.textContent = values[0];
            priceTo.textContent = values[1];
        });
    }


    const productSliderThumbs = new Swiper(".product-page-thumbs", {


        watchSlidesProgress: true,

        breakpoints: {
            767: {
                slidesPerView: 5,
                direction: "vertical",
                spaceBetween: 30,
            },
            1359: {
                spaceBetween: 50,
                slidesPerView: 4,
                direction: "vertical",
            }
        }
    });
    const productSLider = new Swiper(".product-page-slider", {

        pagination: {
            el: ".product-page-slider .swiper-pagination",
            type: "progressbar",
        },
        thumbs: {
            swiper: productSliderThumbs,
        },

        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1023: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });



});

const tabs = document.querySelector('.tabs')
if (tabs) {
    const tab = document.querySelectorAll('.tab-header')
    const tabContent = document.querySelectorAll('.tab-content');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('active');
            tab[i].classList.add('no-active');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            tab[b].classList.add('active');
            tab[b].classList.remove('no-active');
        }
    }

    tabs.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('tab-header')) {

            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
}

function editHeaderScroll() {
    if (scrollY > 10) {
        document.querySelector('header').classList.add('scroll')
    }
    else {
        document.querySelector('header').classList.remove('scroll')
    }
}

window.addEventListener('scroll', function () {
    editHeaderScroll()
});


const bannerSlider = new Swiper(".banner-slider", {
    spaceBetween: 10,
    pagination: {
        el: '.banner-slider .swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: ".banner-slider .swiper-button-next",
        prevEl: ".banner-slider .swiper-button-prev",
    },





});
const lockPadding = document.querySelectorAll('.lock-padding')
const wrapper = document.querySelector('.wrapper')
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        lockPadding.forEach((el) => {
            el.style.paddingRight = lockPaddingValue
        })
    }

    document.body.style.paddingRight = lockPaddingValue;

    document.body.classList.add('fixed');
}
function bodyUnLock() {
    document.body.style.paddingRight = '0'

    document.body.classList.remove('fixed')

    if (lockPadding.length > 0) {
        lockPadding.forEach((el) => {
            el.style.paddingRight = '0px'
        })
    }
}

function editHeaderScroll() {
    if (scrollY > 10) {
        document.querySelector('header').classList.add('scroll')
    }
    else {
        document.querySelector('header').classList.remove('scroll')
    }
}

window.addEventListener('scroll', function () {
    editHeaderScroll()
});
const menuOpen = document.querySelector('.js-menu-open')
if (menuOpen)
    menuOpen.addEventListener('click', () => {
        menuOpen.classList.toggle('active')
        document.querySelector('.header__menu--mobile').classList.toggle('open')
    })

const basketOpen = document.querySelector('.js-basket-open')
if (basketOpen)
    basketOpen.addEventListener('click', () => {
        document.querySelector('.basket').classList.add('open')
    })

const basketClose = document.querySelector('.js-basket-close')
if (basketClose)
    basketClose.addEventListener('click', () => {
        document.querySelector('.basket').classList.remove('open')
    })


const filtersOpen = document.querySelector('.js-filters-open')
if (filtersOpen)
    filtersOpen.addEventListener('click', () => {
        document.querySelector('.shop-page-inner .col:first-child').classList.add('open')
    })

const filtersClose = document.querySelector('.js-filters-close')
if (filtersClose)
    filtersClose.addEventListener('click', () => {
        document.querySelector('.shop-page-inner .col:first-child').classList.remove('open')
    })



const vh = window.innerHeight;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
