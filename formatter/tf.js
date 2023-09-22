const log = console.log.bind(console)

function bindEvent(element, eventName, callback) {
    element = e(element)
    element.addEventListener(eventName, callback)
}

class GuaObject {
    static new(...args) {
        return new this(...args)
    }
}

function e(sel) { 
    return document.querySelector(sel) 
}


function appendHtml(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

