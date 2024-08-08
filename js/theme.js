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