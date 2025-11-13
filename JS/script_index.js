// Get Element
var mobileLogo = document.getElementById("mobileLogo");
var buttonFR = document.getElementById("FR_button");
var buttonEN = document.getElementById("EN_button");
var logoNav = document.getElementById("logoNavLI");

// Navbar
var navbar = document.querySelector('nav')

function navCheck() {
    if (window.innerWidth < window.innerHeight || window.pageYOffset > 300) {
        // Small Nav
        mobileLogo.style.display = "block";
        buttonFR.style.display = "none";
        buttonEN.style.display = "none";
        logoNav.style.display = "none";
    }
    else {
        // Big Nav
        mobileLogo.style.display = "none";
        buttonFR.style.display = "block";
        buttonEN.style.display = "block";
        logoNav.style.display = "block";
    }
}

window.onscroll = function() {

    if (window.pageYOffset > 300) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')

        if (navbar.classList.contains('clicked')) {
            navbar.classList.remove('clicked')
            click = 0
        }
    }

    navCheck();
}
// Navbar End

// Mobile Ver
var click = 0;

function mobileNav() {
    if (click === 0) {
        navbar.classList.add('clicked');
        click = 1;
    }
    else {
        navbar.classList.remove('clicked');
        click = 0;
    }
}

window.onresize = function() {
    navCheck();
    mobileCheck();
}

navCheck();
mobileCheck();
// Mobile Ver End