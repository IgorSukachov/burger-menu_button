document.querySelector('.hamburger').addEventListener('click', function(e) {
    this.classList.toggle('active')
    document.querySelector('.menu').classList.toggle('open-menu')
})