import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

window.onload = function() {
    const navbar = document.querySelector('.navbar')
    const returnTopBtn = document.querySelector('.return-top-btn')

    // Navbar Animated

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 100) {
            navbar.style.height = '60px'
        } else {
            navbar.style.height = '100px'
        }
    })

    // Scroll back to top

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 600) {
            returnTopBtn.style.display = 'block'
        } else {
            returnTopBtn.style.display = 'none'
        }
    })

    returnTopBtn.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })

    carousel();
}

function carousel() {
    var swiper = new Swiper(".mySwiper", {
        speed: 800,
        spaceBetween: 220,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 5,
        centeredSlides: true,       
        watchSlidesProgress: false,
        watchOverflow: true,
        watchSlidesProgress: true,
        
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        observer: true,  
        observeParents: true,
        longSwipes: true,
        longSwipesMs: 200,
    })
}