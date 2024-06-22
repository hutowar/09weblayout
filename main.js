const menuEl = document.querySelector('.menu');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', function (e) {
    menuEl.classList.toggle("enabled");
});