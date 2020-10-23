let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

//console.log(menuToggle);

menuToggle.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('visible');
})