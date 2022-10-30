import icsToJson from '../../node_modules/ics-to-json/icsToJson.js';


let loading = document.querySelector("#panel-loading-edt");

loading.visible = true;

// Convert function for ics to json
const convert = async (fileLocation) => {
    loading.visible = true;
    const icsRes = await fetch(fileLocation);
    const icsData = await icsRes.text();
    // Convert
    const data = icsToJson(icsData);
    loading.visible = false;
    return data;
};

const reqOrigin = localStorage.getItem("reqOrigin");
const reqServer = reqOrigin + "/gus-edt-ics-";















// Environnement variables

// Dates

let fakeCourses = [
    "Jour Férié ",
    "Fermeture IUT "
];


var actualDate = new Date();

let actualYear = actualDate.getFullYear();
let actualMonth = actualDate.getMonth();
let actualWeek = Math.round(actualDate.getDate() / 7);
if (actualWeek === 0) {
    actualWeek = 1;
}

let selectedYear = actualYear;
let selectedWeekOfTheYear = Math.ceil(
    (
        new Date(`${actualMonth + 1}/${actualDate.getDate()}/${actualYear}`).getTime()
        - new Date(`01/01/${actualYear}`).getTime()
    )
    /
    (
        1000 * 3600 * 24
    )
    / 7
);
if (selectedWeekOfTheYear === 0) {
    selectedWeekOfTheYear = 1;
}
let lastSelectedDayOfTheWeek = actualDate.getDay();
let selectedDateOfTheYear = selectedWeekOfTheYear * 7 - (-lastSelectedDayOfTheWeek + 4);

let actualWeekOfTheYear = selectedWeekOfTheYear;



// Groups
let actualGroup = localStorage.getItem("selectedGroup");

if (actualGroup === null) {
    actualGroup = "LP MiAR Groupe 2";
    localStorage.setItem("selectedGroup", actualGroup);
}



// Data
let database;
// let dataByMonth;
let dataByWeek;

let uiVer = "desktop";


let showDaysButtonOnMobile = localStorage.getItem("showDaysButtonOnMobile") === "true";







var rawGroups = await fetch("./content/data/bd/groups.json");
var groups = await rawGroups.json();


// Local
// let icsData = await convert(`./content/data/ics/${groups[actualGroup]}.ics`);

// Maj auto
let icsData = await convert(reqServer + `${groups[actualGroup]}`);















// Functions


// Reformate
function getDateFromString(dateParam) {
    var dateParamArr = dateParam.split("T");

    var date = dateParamArr[0];
    var time = dateParamArr[1];

    date = date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8);
    time = time.substring(0, 2) + ":" + time.substring(2, 4) + ":" + time.substring(4, 6);

    var finalDate = date + "T" + time;

    return new Date(finalDate);
}

function createLessonFromData(jsonData) {
    var lesson = jsonData;

    var startDate = getDateFromString(lesson.startDate);
    var endDate = getDateFromString(lesson.endDate);

    var location = lesson.location;
    var summary = lesson.summary;

    var lessonToReturn = {
        startDate: startDate,
        endDate: endDate,
        location: location,
        summary: summary
    };

    return lessonToReturn;
}


// Filtre
function getDatabaseFromData(jsonData) {
    var database = [];

    for (var i = 0; i < jsonData.length; i++) {
        var lesson = createLessonFromData(jsonData[i]);

        /*
        if (lesson.startDate.getTimezoneOffset() === -60) {
            lesson.startDate.setHours(lesson.startDate.getHours() - 60);
            lesson.endDate.setHours(lesson.endDate.getHours() - 60);
        }
        */

        database.push(lesson);
    }

    return database;
}

function getDataByWeek(database, week) {
    var dataToFind = [];

    for (var offset = 4; offset > -2; offset--) {
        var dateToFind = new Date(selectedYear, 0, week * 7 - offset);

        for (var i = 0; i < database.length; i++) {
            var day = database[i].startDate.getDate();
            var month = database[i].startDate.getMonth();
            var year = database[i].startDate.getFullYear();
            
            if (day === dateToFind.getDate()
                && month === dateToFind.getMonth()
                && year === dateToFind.getFullYear()
            ) {
                dataToFind.push(database[i]);
            }
        }
    }

    return dataToFind;
}

function getDataByDay(database, day) {
    var dataToFind = [];
    var dateToFind = new Date(selectedYear, 0, day);

    for (var i = 0; i < database.length; i++) {
        var day = database[i].startDate.getDate();
        var month = database[i].startDate.getMonth();
        var year = database[i].startDate.getFullYear();
        
        if (day === dateToFind.getDate()
            && month === dateToFind.getMonth()
            && year === dateToFind.getFullYear()
        ) {
            dataToFind.push(database[i]);
        }
    }

    return dataToFind;
}





function hideCourses(contentParam) {
    var content = contentParam;

    var hiddenCourses = JSON.parse(localStorage.getItem("hiddenCourses"));

    if (hiddenCourses !== null) {
        for (var i = 0; i < content.length; i++) {
            for (var n = 0; n < content[i].length; n++) {
                hiddenCourses.forEach((hiddenCourse) => {
                    if (content[i][n]?.title?.includes(hiddenCourse)) {
                        content[i].splice(n, 1);
                        n -= 1;
                    }
                });
            }
        }
    }

    return content;
}

function convertToTimetable(contentParam) {
    var content = contentParam;

    for (var i = 0; i < content.length; i++) {
        for (var n = 0; n < content[i].length; n++) {
            var hourOffset = content[i][n].startDate.getTimezoneOffset();

            var startHour = content[i][n].startDate.getHours() + 2;
            var endHour = content[i][n].endDate.getHours() + 2;

            if (hourOffset === -60) {
                startHour -= 1;
                endHour -= 1;
            }

            content[i][n] = {
                title: content[i][n].summary.replaceAll("\\", "<br>").replaceAll(", ", "") + `<br>${content[i][n].location}`,
                startHour: startHour + "h",
                startMinutes: content[i][n].startDate.getMinutes(),
                endHour: endHour + "h",
                endMinutes: content[i][n].endDate.getMinutes()
            };
            content[i][n].title = 
                content[i][n].title 
                + "<br>" 
                + content[i][n].startHour 
                + (content[i][n].startMinutes !== 0 ? content[i][n].startMinutes : "00")
                + "-" 
                + content[i][n].endHour 
                + content[i][n].endMinutes
            };
    }

    content = hideCourses(content);

    return content;
}

function applyPersonnalization(tasks) {
    for (var i = 0; i < tasks.length; i++) {
        for (var n = 0; n < tasks[i].length; n++) {
            var typeOfLesson = tasks[i][n].innerHTML.replace(/\s/g, "").split("-")[0];

            switch (typeOfLesson) {
                case "Cours":
                    tasks[i][n].style.background = "rgb(236, 78, 78)";
                    break
                case "TD": 
                    tasks[i][n].style.background = "rgb(92, 92, 238)";
                    break
                case "TP": 
                    tasks[i][n].style.background = "rgb(193, 60, 255)";
                    break
            }
        }
    }
}

function getDateToDisplay(date) {
    // Desktop
    if (uiVer === "desktop") {
        return date.getDate() - 1
        + "/" 
        + (date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1) // Merci Julie
        + "/" 
        + date.getFullYear();
    }
    else { // Mobile
        return date.getDate()
        + "/" 
        + (date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1) // Merci Julie
        + "/" 
        + date.getFullYear();
    }
}

function getDayToDisplay(date) {
    var allDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    return allDays[date.getDay()];
}

function getDateOfWeek(week, offset) {
    var d = (1 + week * 7); // 1st of January + 7 days for each week

    return new Date(selectedYear, 0, d + offset);
}

function displayNbHour(content) {
    var totalNbMinutes = 0;
    for (var n = 0; n < content.length; n++) {
        for (var i = 0; i < content[n].length; i++) {
            var task = content[n][i];

            if (!fakeCourses.includes(task.title.split("-")[1])) {
                var startHour = parseInt(task.startHour.split("h")[0]) * 60;
                var startMinutes = task.startMinutes;
    
                var endHour = parseInt(task.endHour.split("h")[0]) * 60;
                var endMinutes = task.endMinutes;
    
                var nbMinutes = endHour - startHour - startMinutes + endMinutes;
    
                totalNbMinutes += nbMinutes;
            }
        }
    }
    var totalNbHour = Math.floor(totalNbMinutes / 60);
    var offsetMinutes = totalNbMinutes % 60;

    var panelHour = document.querySelector('#panel-hour');

    panelHour.innerHTML = `Total heures : ${totalNbHour}h ${offsetMinutes}min`;
}




// Generate Timetables
function generateWeek() {
    database = getDatabaseFromData(icsData);

    dataByWeek = getDataByWeek(database, selectedWeekOfTheYear);

    // Convert Data
    var contentToDisplay = [];

    contentToDisplay.push(getDataByDay(dataByWeek, selectedDateOfTheYear - 4));
    contentToDisplay.push(getDataByDay(dataByWeek, selectedDateOfTheYear - 3));
    contentToDisplay.push(getDataByDay(dataByWeek, selectedDateOfTheYear - 2));
    contentToDisplay.push(getDataByDay(dataByWeek, selectedDateOfTheYear - 1));
    contentToDisplay.push(getDataByDay(dataByWeek, selectedDateOfTheYear));


    // Display data
    var timetable = document.querySelector(".timetable"); // Select timetable



    timetable.days = JSON.stringify([
        "Lundi<br>" + getDateToDisplay(getDateOfWeek(selectedWeekOfTheYear, -4)),
        "Mardi<br>" + getDateToDisplay(getDateOfWeek(selectedWeekOfTheYear, -3)),
        "Mercredi<br>" + getDateToDisplay(getDateOfWeek(selectedWeekOfTheYear, -2)),
        "Jeudi<br>" + getDateToDisplay(getDateOfWeek(selectedWeekOfTheYear, -1)),
        "Vendredi<br>" + getDateToDisplay(getDateOfWeek(selectedWeekOfTheYear, 0))
    ]);
        

    contentToDisplay = convertToTimetable(contentToDisplay);
    displayNbHour(contentToDisplay);
    timetable.content = JSON.stringify(contentToDisplay); // Gives tasks to timetable

    applyPersonnalization(timetable.getTasks());
}

function generateDay() {
    var day = getDataByDay(database, selectedDateOfTheYear);

    // Display data
    var timetable = document.querySelector(".timetable"); // Select timetable
    
    timetable.days = JSON.stringify([
        getDayToDisplay(new Date(actualYear, 0, selectedDateOfTheYear - 1)) + "<br>" + getDateToDisplay(new Date(actualYear, 0, selectedDateOfTheYear))
    ]);

    var day = convertToTimetable([day]);

    displayNbHour(day);

    timetable.content = JSON.stringify(day);

    applyPersonnalization(timetable.getTasks());

    // Panel
    panelWeek.innerHTML = `Semaine ${selectedWeekOfTheYear}`;
}

// Navigate among weeks
function nextWeek() {
    selectedWeekOfTheYear += 1;

    selectedDateOfTheYear += 7;

    if (selectedWeekOfTheYear === 53) {
        selectedWeekOfTheYear = 1;
        selectedDateOfTheYear = selectedWeekOfTheYear * 7;
        selectedYear += 1;
    }

    // Update display
    panelWeek.innerHTML = `Semaine ${selectedWeekOfTheYear}`;

    if (uiVer === "mobile") {
        generateDay();
    }
    else {
        generateWeek();
    }
}

function previousWeek() {
    selectedWeekOfTheYear -= 1;

    selectedDateOfTheYear -= 7;

    if (selectedWeekOfTheYear === 0) {
        selectedWeekOfTheYear = 52;
        selectedDateOfTheYear = selectedWeekOfTheYear * 7 + 1;
        selectedYear -= 1;
    }

    // Update display
    panelWeek.innerHTML = `Semaine ${selectedWeekOfTheYear}`;
    
    if (uiVer === "mobile") {
        generateDay();
    }
    else {
        generateWeek();
    }
}

// Navigate among days
function nextDay() {
    selectedDateOfTheYear += 1;

    var previousDate = new Date(selectedYear, 0, selectedDateOfTheYear - 1);
    var newDate = new Date(selectedYear, 0, selectedDateOfTheYear);

    if (previousDate.getDay() === 0 && newDate.getDay() === 1) {
        selectedWeekOfTheYear += 1;
    }

    lastSelectedDayOfTheWeek += 1;

    if (lastSelectedDayOfTheWeek === 8) {
        lastSelectedDayOfTheWeek = 1;
    }

    generateDay();
}

function previousDay() {
    selectedDateOfTheYear -= 1;

    var previousDate = new Date(selectedYear, 0, selectedDateOfTheYear + 1);
    var newDate = new Date(selectedYear, 0, selectedDateOfTheYear);

    if (previousDate.getDay() === 1 && newDate.getDay() === 0) {
        selectedWeekOfTheYear -= 1;
    }

    lastSelectedDayOfTheWeek -= 1;

    if (lastSelectedDayOfTheWeek === 0) {
        lastSelectedDayOfTheWeek = 7;
    }

    generateDay();
}

// mobile and desktop versions
function mobileVer() {
    uiVer = "mobile";
    selectedDateOfTheYear = selectedWeekOfTheYear * 7 - (-lastSelectedDayOfTheWeek + 5);
    
    // Timetable
    generateDay();

    if (showDaysButtonOnMobile) {
        buttonNextDay.style.display = "unset";
        buttonPreviousDay.style.display = "unset";
    }
}
function desktopVer() {
    uiVer = "desktop";
    // Timetable
    if (selectedYear === 2021) {
        selectedDateOfTheYear = selectedWeekOfTheYear * 7 + 1;
    }
    else {
        selectedDateOfTheYear = selectedWeekOfTheYear * 7;
    }

    generateWeek();

    // Buttons
    var buttonNextDay = document.querySelector("#button-next-day");
    var buttonPreviousDay = document.querySelector("#button-previous-day");

    buttonNextDay.style.display = "none";
    buttonPreviousDay.style.display = "none";
}



generateWeek(); // Call first generation














// Panel

let panelGroup = document.querySelector("#panel-group");
let panelWeek = document.querySelector("#panel-week");




panelGroup.innerHTML = `${actualGroup}`;

panelWeek.innerHTML = `Semaine ${selectedWeekOfTheYear}`;













// Listeners

// Weeks
var buttonNextWeek = document.querySelector("#button-next-week");
var buttonPreviousWeek = document.querySelector("#button-previous-week");

buttonNextWeek.addEventListener("click", (e) => {
    nextWeek();
});

buttonPreviousWeek.addEventListener("click", (e) => {
    previousWeek();
});


// Days
let buttonNextDay = document.querySelector("#button-next-day");
let buttonPreviousDay = document.querySelector("#button-previous-day");

buttonNextDay.addEventListener("click", (e) => {
    nextDay();
});
buttonPreviousDay.addEventListener("click", (e) => {
    previousDay();
});


// Groups
var comboboxGroups = document.querySelector("#combobox-groups");

comboboxGroups.setAttribute("selected-value", actualGroup);

comboboxGroups.addEventListener("value-changed", async (e) => {
    actualGroup = e.target.getAttribute("selected-value");

    localStorage.setItem("selectedGroup", actualGroup);

    panelGroup.innerHTML = actualGroup;

    icsData = await convert(reqServer + `${groups[actualGroup]}`);

    generateWeek();

    if (window.innerHeight / window.innerWidth > 1) {
        generateDay();
    }
});






















// Gestures
document.addEventListener('swipeleft', (e) => {
    if (uiVer === "mobile") {
        nextDay();
        generateDay();
    }
    else {
        nextWeek();
    }
});
document.addEventListener('swiperight', (e) => {
    if (uiVer === "mobile") {
        previousDay();
        generateDay();
    }
    else {
        previousWeek();
    }
});















// Window Mobile


if (window.innerHeight / window.innerWidth > 9/10) {
    mobileVer();
}
else {
    desktopVer();
}


window.addEventListener("resize", (e) => {
    if (window.innerHeight / window.innerWidth > 9/10) {
        mobileVer();
    }
    else {
        desktopVer();
    }
});























