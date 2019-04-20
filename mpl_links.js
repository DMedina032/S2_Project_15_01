"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Dajah Medina
   Date:   4.18.19
   
   Filename: mpl_links.js

*/
//An event listener for the load event to run the anonymous function
window.addEventListener('load', function () {
    //establish the allSelect varible and got the class name of it
    var allSelect = document.forms.govLinks
    //created a for loop loop through the selection list 
    for (var i = 0; i < allSelect.length; i++) {
        //create a anonymous function for  the href property shown in the browser window to target the onchange event when it is initiated 
        allSelect[i].onchange = function (e) {
            document.location.href = e.target.value;
        }
    }
});