import { GusAlertBox } from "../../node_modules/gus-ui/advanced_components/gus_alert_box.js";
import { GusChips } from "../../node_modules/gus-ui/basic_components/gus_chips.js";

// Data

const reqOrigin = localStorage.getItem("reqOrigin");
let reqIsValidUser = reqOrigin + "/is-valid-user";

let loading = document.querySelector("#panel-loading-global");

let showDaysButtonOnMobile = localStorage.getItem("showDaysButtonOnMobile") === "true";

if (showDaysButtonOnMobile === null) {
    showDaysButtonOnMobile = false;
    localStorage.setItem("showDaysButtonOnMobile", showDaysButtonOnMobile);
}


let uiVer = "desktop";


// Window Mobile

if (window.innerHeight / window.innerWidth > 1) {
    uiVer = "mobile";
}
else {
    uiVer = "desktop";
}


window.addEventListener("resize", (e) => {
    if (window.innerHeight / window.innerWidth > 1) {
        uiVer = "mobile";
    }
    else {
        uiVer = "desktop";
    }
});











// Settings options

// Light/Dark Mode
var settingsButtonLightMode = document.querySelector("#settings-option-light-mode");
let uiMode = localStorage.getItem("uiMode");

var gusUi = document.querySelector("gus-ui");

if (uiMode !== null) {
    gusUi.mode = uiMode;

    settingsButtonLightMode.checked = uiMode === "light";
}
else {
    localStorage.setItem("uiMode", "dark");
}


settingsButtonLightMode.addEventListener("value-changed", (e) => {
    var gusUi = document.querySelector("gus-ui");

    gusUi.mode = gusUi.mode === "light" ? "dark" : "light";
    localStorage.setItem("uiMode", gusUi.mode);

    if (gusUi.mode === 'light') {
        colorPickerMain.value = gusUi.colorLight;
    }
    else {
        colorPickerMain.value = gusUi.colorDark;
    }
});

// Hard Reload
var settingsButtonHardReload = document.querySelector("#settings-option-hard-reload");

settingsButtonHardReload.addEventListener("click", (e) => {
    // Hard reload
    window.location.reload(true);
});

// showDaysButtonOnMobile
let buttonNextDay = document.querySelector("#button-next-day");
let buttonPreviousDay = document.querySelector("#button-previous-day");

var daysButtonOnMobile = document.querySelector("#settings-option-show-nextday-mobile");

daysButtonOnMobile.checked = showDaysButtonOnMobile;

daysButtonOnMobile.addEventListener("value-changed", (e) => {

    showDaysButtonOnMobile = !showDaysButtonOnMobile;

    if (uiVer === "mobile" && showDaysButtonOnMobile) {
        buttonNextDay.style.display = "unset";
        buttonPreviousDay.style.display = "unset";
    }
    else {
        buttonNextDay.style.display = "none";
        buttonPreviousDay.style.display = "none";
    }

    localStorage.setItem("showDaysButtonOnMobile", showDaysButtonOnMobile);
});

if (uiVer === "mobile" && showDaysButtonOnMobile) {
    buttonNextDay.style.display = "unset";
    buttonPreviousDay.style.display = "unset";
}
else {
    buttonNextDay.style.display = "none";
    buttonPreviousDay.style.display = "none";
}


// Color Picker
var colorPickerMain = document.querySelector("#settings-option-ui-color");


if (localStorage.getItem("uiColorlight") !== null) {
    gusUi.colorLight = localStorage.getItem("uiColorlight");
}
if (localStorage.getItem("uiColordark") !== null) {
    gusUi.colorDark = localStorage.getItem("uiColordark");
}

if (gusUi.mode === 'light') {
    colorPickerMain.value = gusUi.colorLight;
}
else {
    colorPickerMain.value = gusUi.colorDark;
}

colorPickerMain.addEventListener("input", (e) => {
    localStorage.setItem(`uiColor${gusUi.mode}`, colorPickerMain.value);

    if (gusUi.mode === 'light') {
        gusUi.colorLight = localStorage.getItem("uiColorlight");
    }
    else {
        gusUi.colorDark = localStorage.getItem("uiColordark");
    }
});



// Reset config
var settingsButtonResetConfig = document.querySelector("#settings-option-reset-config");

settingsButtonResetConfig.addEventListener("click", (e) => {
    localStorage.clear();
    window.location.reload();
});




// Hide courses

var textfieldHideCourses = document.querySelector("#settings-option-edt-hide-courses");
var listHideCourses = document.querySelector("#settings-option-edt-hide-courses-chips");

if (localStorage.getItem("hiddenCourses") === null) {
    localStorage.setItem("hiddenCourses", JSON.stringify([]));
}

function getChipFromValue(value) {
    let chipDiv = document.createElement("div");
    chipDiv.innerHTML = `<gus-chips content=${value} cross-visible="true" auto-delete="true"></gus-chips>`;

    var chip = chipDiv.querySelector("gus-chips");

    chip.addEventListener("close", (e) => { // When deleting the chip
        var valueToDelete = e.srcElement.attributes.content.textContent;
        var hiddenCourses = JSON.parse(localStorage.getItem("hiddenCourses"));
        hiddenCourses.splice(hiddenCourses.indexOf(valueToDelete), 1);
        localStorage.setItem("hiddenCourses", JSON.stringify(hiddenCourses));
        renderHiddenCourses();
    });

    return chip;
}

function addHiddenCourse(courseValue) {
    let chip = getChipFromValue(courseValue);

    // Local storage
    var hiddenCourses = JSON.parse(localStorage.getItem("hiddenCourses"));
    hiddenCourses.push(courseValue);
    localStorage.setItem("hiddenCourses", JSON.stringify(hiddenCourses));

    // DOM
    listHideCourses.appendChild(chip);
}

function renderHiddenCourses() {
    listHideCourses.innerHTML = "";
    let hiddenCourses = JSON.parse(localStorage.getItem("hiddenCourses"));
    hiddenCourses.forEach(course => {
        var chip = getChipFromValue(course);
        listHideCourses.appendChild(chip);
    });
}


// When hiting enter on the textfield
textfieldHideCourses.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        // Enter key pressed
        var value = textfieldHideCourses.value;
        console.log(value);
        textfieldHideCourses.value = "";
        addHiddenCourse(value);
    }
});

renderHiddenCourses();
