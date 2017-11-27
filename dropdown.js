"use strict";

//========================= DROPDOWN MENU ===============================

// onclick function from: http://stackoverflow.com/questions/15229732/show-a-div-onclick-and-hide-the-image-that-triggered-it
var dropdown = function () {
    var content = document.getElementById("ddcontent");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
};