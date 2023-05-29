function themeAbout() {
    const css = document.getElementById("cssFileAbout");// constant that holds the cssfile
    const checkBox = document.getElementById("check");//constant checkbox

    if (checkBox.checked == true) {//if statement to check what input hasbeen gievn to the chck box
        css.setAttribute("href","/About/aboutL.css")//allwos to swap files in html document
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

