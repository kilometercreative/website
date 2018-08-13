
navButton = document.getElementById("accordion-button");
mobileTop = document.getElementById("mobile-top");
navContainer = document.getElementById("mobile-nav-container");
var menuOpen = false;

function toggleMobileNav() {
    navButton.classList = (menuOpen) ? "accordion-button" : "accordion-button accordion-button-expanded";
    navContainer.classList = (menuOpen) ? "mobile-nav-container" : "mobile-nav-container mobile-nav-container-expanded";
    mobileTop.classList = (menuOpen) ? "top" : "top top-expanded";
    menuOpen = !menuOpen;
}