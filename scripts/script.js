var deBody = document.querySelector("body");

// Video player button 1
var buttonWeg = document.querySelector(".PageOne section:first-of-type button");
var homeVideo = document.querySelector(".PageOne section:first-of-type video");
var deVideo = document.querySelector(".PageOne section:first-of-type")

// Filter
var filterButton = document.querySelector(".PageTwo section:nth-of-type(2) button");
var filterWeg = document.querySelector(".PageTwo section:nth-of-type(1) div:nth-of-type(1) div:nth-of-type(2) > button");
var filterKlaar = document.querySelector(".PageTwo section:nth-of-type(1) div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(6) > button:nth-of-type(2)");

// Filter 2
var filterButton2 = document.querySelector(".PageTwo section:nth-of-type(1) div:nth-of-type(1) div:nth-of-type(1) > button"); 

// Het hamburger menu
var deNav = document.querySelector("header:nth-of-type(2) nav");
var hamburgerMenu = document.querySelector("header:nth-of-type(2) nav button");
var xMenu = document.querySelector("header:nth-of-type(2) nav nav ul li button");


function weg() {
    buttonWeg.classList.add("weg");
    homeVideo.setAttribute("controls", "");
    homeVideo.removeAttribute("muted", "");
}

function openMenu() {
    deBody.classList.add("toonMenu")
}

function sluitMenu() {
    deBody.classList.remove("toonMenu")
}

function openFilter() {
    deBody.classList.add("toonFilter")
}

function sluitFilter() {
    deBody.classList.remove("toonFilter")
}

function Filter2() {
    deBody.classList.toggle("toonFilter2")
}

if (filterButton) {
    filterButton.addEventListener("click", openFilter)
}

if (filterWeg) {
    filterWeg.addEventListener("click", sluitFilter)
}

if (filterKlaar) {
    filterKlaar.addEventListener("click", sluitFilter)
}

if (filterButton2) {
    filterButton2.addEventListener("click", Filter2)
}

if (buttonWeg) {
    buttonWeg.addEventListener("click", weg);
}

hamburgerMenu.addEventListener("click", openMenu);
xMenu.addEventListener("click", sluitMenu);
