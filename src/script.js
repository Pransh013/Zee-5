document.getElementById('menuToggle').addEventListener('click', function () {
    let overlay = document.getElementById('overlay');
    let menu = document.getElementById('menu');
    let icon = document.getElementById('menuIcon');

    overlay.classList.toggle('hidden');
    if (menu.classList.contains('menu')) {

        menu.classList.remove('menu');
        menu.classList.add('navclass');
    }
    else if (menu.classList.contains('navclass')) {
        menu.classList.remove('navclass');
        menu.classList.add('menu');
    }
    icon.textContent = icon.textContent === 'menu' ? 'close' : 'menu';
});


window.addEventListener('scroll', function () {
    const backToTopButton = document.querySelector('.back-to-top');
    const page1 = document.getElementById('page1');

    if (window.scrollY > page1.offsetTop + page1.clientHeight) {
        backToTopButton.classList.add("active");
    } else {
        backToTopButton.classList.remove("active");
    }
});


function scrollCarousel(carouselId, percentage) {
    const carousel = document.getElementById(carouselId);
    const scrollAmount = (percentage / 100) * window.innerWidth;
    carousel.scrollLeft += scrollAmount;
}

function handleScroll(carouselId) {
    const carousel = document.getElementById(carouselId);
    const prevArrow = document.querySelector('.carousel-prev');
    const nextArrow = document.querySelector('.carousel-next');

    carousel.addEventListener('scroll', () => {

        setTimeout(() => {
            prevArrow.style.display = carousel.scrollLeft > 0 ? 'flex' : 'none';
        }, 500);

        // nextArrow.style.display = carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth) ? 'none' : 'flex';
    });
}
handleScroll('carousel1');
handleScroll('carousel2');
handleScroll('carousel3');


function showResults() {
    var resultsContainer = document.getElementById('search-results');
    if (window.innerWidth >= 800) {
        resultsContainer.style.display = 'block';
        overlay1.classList.toggle('hidden');    
    }

    document.addEventListener('click', function (event) {
        var isClickInside = document.getElementById('search-container').contains(event.target);
        if (!isClickInside) {
            if (resultsContainer.style.display === 'block') {
                overlay1.classList.toggle('hidden');
            }
            resultsContainer.style.display = 'none';
        }
    });
}