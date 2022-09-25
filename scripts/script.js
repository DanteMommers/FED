// Video player button 1
var buttonWeg = document.querySelector(".PageOne section:first-of-type button");
var homeVideo = document.querySelector(".PageOne section:first-of-type video");

// Het hamburger menu
var deBody = document.querySelector("body");
var deNav = document.querySelector("header:nth-of-type(2) nav");
var deVideo = document.querySelector(".PageOne section:first-of-type")
var hamburgerMenu = document.querySelector("header:nth-of-type(2) nav button");
var xMenu = document.querySelector("header:nth-of-type(2) nav nav ul li button");


function weg() {
    buttonWeg.classList.add("weg");
    homeVideo.setAttribute("controls", "");
    homeVideo.removeAttribute("muted", "");
}

function openMenu() {
    deBody.classList.add("toonMenu")
    // deNav.classList.add("toonMenu")
    // deVideo.classList.add("toonMenu")
}

function sluitMenu() {
    deBody.classList.remove("toonMenu")
    // deNav.classList.remove("toonMenu")
    // deVideo.classList.remove("toonMenu")
}

if (buttonWeg) {
    buttonWeg.addEventListener("click", weg);
}

hamburgerMenu.addEventListener("click", openMenu);
xMenu.addEventListener("click", sluitMenu);
