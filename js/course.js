var navbar = document.getElementById('web-navbar')

window.onscroll = function () {
    if (window.pageYOffset > 300) {
        navbar.style.background = "rgba(0, 0, 0, 0.493)";
    } else {
        navbar.style.background = "transparent";
    }
}