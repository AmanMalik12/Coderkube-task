// Change the background color of the navigation bar when scrolling and invert colors
const myNav = document.querySelector("#navbar")

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        myNav.style.backgroundColor = "#000"
    } else {
        myNav.style.backgroundColor = "#1f2937"
    }
});