var docNav = document.querySelector(".doc-nav")

docNav.innerHTML = `
<h3>Documentation</h3>
<hr>
<div class="doc-nav-content">

    <a href="../../index.html">
        <h4>Home</h4>
    </a>

    <h4>Overview</h4>
    <div class="doc-nav-component-list list-overview">
        <h5 title="intro">Introduction</h5>
        <h5 title="quick-start">Quick Start</h5>
        <h5 title="attributes">Attributes</h5>
        <h5 title="css-parts">CSS Parts</h5>
        <h5 title="slots">Slots</h5>
        <h5 title="events">Events</h5>
    </div>

    <h4>Basic Components</h4>
    <div class="doc-nav-component-list list-basic">
        <h5 title="box">Box</h5>
        <h5 title="button">Button</h5>
        <h5 title="checkbox">Checkbox</h5>
        <h5 title="chips-list">Chips List</h5>
        <h5 title="chips">Chips</h5>
        <h5 title="combobox">Combobox</h5>
        <h5 title="navbar">Navbar</h5>
        <h5 title="progress-bar">Progress Bar</h5>
        <h5 title="radio-button-list">Radio Button List</h5>
        <h5 title="radio-button">Radio Button</h5>
        <h5 title="range-slider">Range Slider</h5>
        <h5 title="slider">Slider</h5>
        <h5 title="switch-box">Switch Box</h5>
        <h5 title="switch">Switch</h5>
        <h5 title="text-area">Text Area</h5>
        <h5 title="text-field">Text Field</h5>
    </div>

    <h4>Advanced Components</h4>
    <div class="doc-nav-component-list list-advanced">
        <h5 title="alert-box">Alert Box</h5>
        <h5 title="card">Card</h5>
        <h5 title="carousel">Carousel</h5>
        <h5 title="countdown">Countdown</h5>
        <h5 title="date-picker">Date Picker</h5>
        <h5 title="dialog">Dialog</h5>
        <h5 title="drop-down-section">Drop Down Section</h5>
        <h5 title="fab">Fab</h5>
        <h5 title="section-slider">Section Slider</h5>
        <h5 title="sidebar">Sidebar</h5>
        <h5 title="stepper">Stepper</h5>
        <h5 title="time-picker">Time Picker</h5>
        <h5 title="timetable">Time Table</h5>
        <h5 title="tooltip">Tooltip</h5>
    </div>

    <h4>Text Components</h4>
    <div class="doc-nav-component-list list-text">
        <h5 title="header">Header</h5>
        <h5 title="title">Title</h5>
        <h5 title="paragraph">Paragraph</h5>
        <h5 title="sub-paragraph">Sub Paragraph</h5>
    </div>

    <h4>Special Components</h4>
    <div class="doc-nav-component-list list-special">
        <h5 title="fade-in">Fade In</h5>
        <h5 title="focus-window">Focus Window</h5>
        <h5 title="loading-bar">Loading Bar</h5>
        <h5 title="loading-circle">Loading Circle</h5>
    </div>

</div>
`

var docNavContent = document.querySelector('.doc-nav-content')

var pageName = window.location.pathname.split("/").pop().replace(".html", "");

// Overview
var components = docNavContent.children[2].children

for (var i = 0; i < components.length; i++) {
    components[i].addEventListener("click", (e) => {
        window.location = `../overview/${e.target.title}.html`
    })
    if (components[i].title === pageName) {
        components[i].classList.add("actual-page-overview")
    }
}

// Basic Components
var components = docNavContent.children[4].children

for (var i = 0; i < components.length; i++) {
    components[i].addEventListener("click", (e) => {
        window.location = `../basic-components/${e.target.title}.html`
    })
    if (components[i].title === pageName) {
        components[i].classList.add("actual-page-basic")
    }
}

// Advanced Components
components = docNavContent.children[6].children

for (var i = 0; i < components.length; i++) {
    components[i].addEventListener("click", (e) => {
        window.location = `../advanced-components/${e.target.title}.html`
    })
    if (components[i].title === pageName) {
        components[i].classList.add("actual-page-advanced")
    }
}

// Text Components
components = docNavContent.children[8].children

for (var i = 0; i < components.length; i++) {
    components[i].addEventListener("click", (e) => {
        window.location = `../text-components/${e.target.title}.html`
    })
    if (components[i].title === pageName) {
        components[i].classList.add("actual-page-text")
    }
}

// Special Components
components = docNavContent.children[10].children

for (var i = 0; i < components.length; i++) {
    components[i].addEventListener("click", (e) => {
        window.location = `../special-components/${e.target.title}.html`
    })
    if (components[i].title === pageName) {
        components[i].classList.add("actual-page-special")
    }
}
