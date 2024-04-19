// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-04-16
// @description  try to take over the world!
// @author       You
// @match        https://fap.fpt.edu.vn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.vn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select the specific td element
    var appStore = document.querySelector('td > a > img[src="https://fap.fpt.edu.vn/images/app-store.png"]').parentNode.parentNode;

    var playStore = document.querySelector('td > a > img[src="https://fap.fpt.edu.vn/images/play-store.png"]').parentNode.parentNode;

    // Add a class name to the selected td element
    appStore.classList.add('appStore');

    playStore.classList.add('playStore');

    // Select the specific div element
    var parentLogin = document.querySelector('div[style="border: solid 1px #ccc; height: 150px;"]');
    parentLogin.classList.add('parentLogin');

    // Select the specific div element without the class 'parentLogin'
    var studentLogin = document.querySelector('div[style="border: solid 1px #ccc; height: 150px;"]:not(.parentLogin)')
    studentLogin.classList.add('studentLogin');

    // Select the specific td element containing the table with id "cssTable"
    var tempFooter = document.querySelector('td > table#cssTable').parentNode;

    tempFooter.classList.add('tempFooter');

    // Select the specific tr element containing the td with class "tempFooter"
    var loginFooter = document.querySelector('tr > .tempFooter').parentNode;

    loginFooter.classList.add('loginFooter');


})();