// ==UserScript==
// @name         Default Styling
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

})();

// ==UserScript==
// @name         Login page styling
// @namespace    http://tampermonkey.net/
// @version      2024-04-16
// @description  try to take over the world!
// @author       You
// @match        https://fap.fpt.edu.vn/Default.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.vn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // 1. Create the element
    var dummyElement = document.createElement('div');

    // 2. Add the class to the element
    dummyElement.classList.add('dummy');

    // 3. Insert the element at the beginning of the document body
    document.body.insertBefore(dummyElement, document.body.firstChild);


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

    // Select all div elements with the class 'col-xs-3' within the specified row
    var loginStuffs = document.querySelectorAll('div.row > div.col-xs-3');

    // You can also add multiple class names to an element
    var classNames = ['campusChooser', 'googleLogin', null, 'feIDLogin']; 

    // Now, loginStuffs will be a NodeList containing all matched div elements
    // You can iterate over loginStuffs and perform further operations on each div element
    loginStuffs.forEach(function(loginStuffs, index) {
        // Add a different class name to each div element
        loginStuffs.classList.add(classNames[index]);
    });

    // var campusChooser = document.querySelector('.campusChooser');
    // campusChooser.classList.add('col-md-6');

    // Select span elements with the the atrribute 'style' containing the value 'margin-left: 20px;'
    var k19Texts = document.querySelector('span[style="margin-left: 20px;"]');
    k19Texts.classList.add('k19Texts');
})();