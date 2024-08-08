require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"gr-sphinx-theme":[function(require,module,exports){
function toggleCurrent(event) {
    'use strict';
    event.preventDefault();
    var link = event.currentTarget.parentElement;
    var element = link.parentElement;
    var siblings = element.parentElement.parentElement.querySelectorAll('li.current');
    for (var i = 0; i < siblings.length; i++) {
        if (siblings[i] !== element) {
            siblings[i].classList.remove('current');
        }
    }
    element.classList.toggle('current');
}

function makeMenuExpandable() {
    'use strict';
    var tocs = document.getElementsByClassName('toc');
    for (var i = 0; i < tocs.length; i++) {
        var links = tocs[i].getElementsByTagName('a');
        for (var ii = 0; ii < links.length; ii++) {
            if (links[ii].nextSibling) {
                var expand = document.createElement('span');
                expand.classList.add('toctree-expand');
                expand.addEventListener('click', toggleCurrent, true);
                links[ii].prepend(expand);
            }
        }
    }
}
makeMenuExpandable();

function selectVersion() {
    const select = document.getElementById('version-select');
    select.addEventListener("change", (event) => {
        event.preventDefault();
        window.open(select.value, "_self");
    })
}
selectVersion();
},{}]},{},["gr-sphinx-theme"]);
