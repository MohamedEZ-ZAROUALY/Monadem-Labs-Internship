"use strict";
exports.__esModule = true;
exports.Weapon = void 0;
var Weapon = /** @class */ (function () {
    function Weapon(name, damage, charge, maxCharge) {
        this.name = name;
        this.damage = damage;
        this.charge = charge;
        this.maxCharge = maxCharge;
    }
    Weapon.prototype.getName = function () { return this.name; };
    Weapon.prototype.getDamage = function () { return this.damage; };
    Weapon.prototype.getCharge = function () { return this.charge; };
    Weapon.prototype.getMaxCharge = function () { return this.maxCharge; };
    Weapon.prototype.setName = function (name) { this.name = name; };
    Weapon.prototype.setDamage = function (damage) { this.damage = damage; };
    Weapon.prototype.setCharge = function (charge) { this.charge = charge; };
    Weapon.prototype.setMaxCharge = function (maxCharge) { this.maxCharge = maxCharge; };
    return Weapon;
}());
exports.Weapon = Weapon;
