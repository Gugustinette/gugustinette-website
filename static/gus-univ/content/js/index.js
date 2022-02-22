import { GusAlertBox } from "../../node_modules/gus-ui/advanced_components/gus_alert_box.js";

localStorage.setItem("reqOrigin", "http://localhost:3000");

var justConnected = localStorage.getItem("just-connected") === 'true';

if (justConnected) {
    var alertBox = new GusAlertBox();

    alertBox.title = "Félicitation";
    alertBox.description = "Vous êtes bien connecté";

    document.body.appendChild(alertBox);

    localStorage.removeItem("just-connected");
}










let sectionSlider = document.querySelector("#section-slider");



if (window.innerHeight / window.innerWidth > 9/10) {
    if (!sectionSlider.inverted) {
        sectionSlider.inverted = true;
    }
}
else {
    if (sectionSlider.inverted) {
        sectionSlider.inverted = false;
    }
}


window.addEventListener("resize", (e) => {
    if (window.innerHeight / window.innerWidth > 9/10) {
        if (!sectionSlider.inverted) {
            sectionSlider.inverted = true;
        }
    }
    else {
        if (sectionSlider.inverted) {
            sectionSlider.inverted = false;
        }
    }  
});

