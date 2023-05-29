function themeAbout() {
    const css = document.getElementById("cssFileAbout");
    const checkBox = document.getElementById("check");

    if (checkBox.checked == true) {
        css.setAttribute("href","/StyleSheets/aboutL.css")
    } else {
        css.setAttribute("href","/StyleSheets/aboutD.css")
    }

}
function themeAchievements() {
    const css = document.getElementById("cssFileAchievements");
    const checkBox = document.getElementById("check");

    if (checkBox.checked == true) {

        css.setAttribute("href","/StyleSheets/achievementsL.css")
    } else {
        css.setAttribute("href","/StyleSheets/achievementsD.css")
    }

}
function themeContact() {
    const css = document.getElementById("cssFileContact");
    const checkBox = document.getElementById("check");

    if (checkBox.checked == true) {

        css.setAttribute("href","/StyleSheets/contactL.css")
    } else {
        css.setAttribute("href","/StyleSheets/contactD.css")
    }

}

