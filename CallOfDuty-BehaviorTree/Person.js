"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, blood) {
        this.name = name;
        this.blood = blood;
    }
    Person.prototype.getName = function () { return this.name; };
    Person.prototype.getBlood = function () { return this.blood; };
    Person.prototype.setName = function (name) { this.name = name; };
    Person.prototype.setBlood = function (blood) { this.blood = blood; };
    return Person;
}());
exports.Person = Person;
