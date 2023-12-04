document.getElementById('menuToggle').addEventListener('click', function () {
    let overlay = document.getElementById('overlay');
    let menu = document.getElementById('menu');
    let icon = document.getElementById('menuIcon');

    overlay.classList.toggle('hidden');
    if (menu.classList.contains('menu')) {
        
        menu.classList.remove('menu');
        menu.classList.add('navclass');
    }
    else if(menu.classList.contains('navclass')){
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
