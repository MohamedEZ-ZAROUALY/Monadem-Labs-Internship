"use strict";
exports.__esModule = true;
exports.sleep = void 0;
function sleep(milliseconds) {
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
exports.sleep = sleep;
