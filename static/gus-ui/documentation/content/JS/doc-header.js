var docHeader = document.querySelector('.content-header')

docHeader.innerHTML = `
<style>
.logo {
    height: 100%;

    display: flex;

    align-items: center;
}

.mobile-menu-button {
    display: none;

    height: 80px;
    width: 80px;

    place-content: center;

    cursor: pointer;
}
.mobile-menu-button svg {
    height: 40px;
    width: 40px;

    fill: var(--primary-color);
}

@media screen and (max-aspect-ratio: 9/9) {
    .logo {
        display: none;
    }
    .mobile-menu-button {
        display: grid;
    }
}
</style>
<a class="mobile-menu-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z"/></svg>
</a>
<a href="../../index.html" class="logo">
    <img src="../../content/assets/img/Logo.png" alt="GusUI Logo">
</a>
`

var mobileButton = document.querySelector(".mobile-menu-button")

let isMobileBarOn = false

mobileButton.addEventListener("click", (e) => {
    var navBar = document.querySelector(".doc-nav")

    if (!isMobileBarOn) {
        navBar.classList.add("doc-nav-mobile-on")
    }
    else {
        navBar.classList.remove("doc-nav-mobile-on")
    }

    isMobileBarOn = !isMobileBarOn
})
