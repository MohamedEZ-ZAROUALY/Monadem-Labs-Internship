"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Warrior = void 0;
var Person_1 = require("./Person");
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name, blood, weapon, munition) {
        var _this = _super.call(this, name, blood) || this;
        _this.weapon = weapon;
        _this.munition = munition;
        return _this;
    }
    Warrior.prototype.getWeapon = function () { return this.weapon; };
    Warrior.prototype.getMunition = function () { return this.munition; };
    Warrior.prototype.setWeapon = function (weapon) {
        this.weapon = weapon;
    };
    Warrior.prototype.setMunition = function (munition) {
        this.munition = munition;
    };
    Warrior.prototype.Attack = function (target) {
        var newBlood = target.getBlood() - this.weapon.getDamage();
        this.weapon.setCharge(this.weapon.getCharge() - 1);
        target.setBlood(newBlood);
    };
    Warrior.prototype.Charge = function () {
        var neededCharge = this.weapon.getMaxCharge() - this.weapon.getCharge();
        this.munition -= neededCharge;
        this.weapon.setCharge(this.weapon.getMaxCharge());
    };
    return Warrior;
}(Person_1.Person));
exports.Warrior = Warrior;
