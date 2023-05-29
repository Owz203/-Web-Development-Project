function themeAbout() {
    const css = document.getElementById("cssFileAbout");
    const checkBox = document.getElementById("check");

    if (checkBox.checked == true) {
        css.setAttribute("href","/About/aboutL.css")
    } else {
        css.setAttribute("href","/About/aboutD.css")
    }

}
function themeAchievements() {
    const css = document.getElementById("cssFileAchievements");
    const checkBox = document.getElementById("check");

    if (checkBox.checked == true) {

        css.setAttribute("href","/Achievemetns/achievementsL.css")
    } else {
        css.setAttribute("href","/Achievemetns/achievementsD.css")
    }

}
function themeContact() {
    const css = document.getElementById("cssFileContact");
    const checkBox = document.getElementById("check");

    if (checkBox.checked == true) {

        css.setAttribute("href","/Contacts/contactL.css")
    } else {
        css.setAttribute("href","/Contacts/contactD.css")
    }

}

