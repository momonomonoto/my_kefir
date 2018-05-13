function getElemByClassName(className) {
    return document.querySelector(`.${className}`);
}

function addEventToElement(elem,fn,event=`click`) {
    elem.addEventListener(event,fn);
}
