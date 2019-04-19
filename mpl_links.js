"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Dajah Medina
   Date:   4.18.19
   
   Filename: mpl_links.js

*/
window.addEventListener('load', function () {
    var allSelect = this.document.getElementsByClassName("optionLinks");
    for (var i = 0; i < allSelect.lnegth; i++) {
        allSelect[i].onchange = function () {

        }
    }
});