var has = require('has');

module.exports = function (name, attr) {
    var elem = document.createElementNS('http://www.w3.org/2000/svg', name);
    if (!attr) return elem;
    for (var key in attr) {
        if (has(attr, key)) elem.setAttribute(key, attr[key]);
    }
    return elem;
}
