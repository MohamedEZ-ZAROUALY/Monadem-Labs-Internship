"use strict";
exports.__esModule = true;
var _a = require('behaviortree'), BehaviorTree = _a.BehaviorTree, Sequence = _a.Sequence, Selector = _a.Selector, Task = _a.Task, SUCCESS = _a.SUCCESS, FAILURE = _a.FAILURE;
var Warrior_1 = require("./Warrior");
var Person_1 = require("./Person");
var Weapon_1 = require("./Weapon");
var Sleep_1 = require("./Sleep");
var AKM = new Weapon_1.Weapon("AKM", 25, 4, 75);
var warrior = new Warrior_1.Warrior("Mohamed", 100, AKM, 40);
var zombie = new Person_1.Person("zombie", 100);
var enemyExist = new Task({
    // This is the meat of your task. The run method does everything you want it to do.
    run: function (blackboard) {
        console.log('I am ' + blackboard["warrior"].getName() + ' and I am scanning the battle field');
        (0, Sleep_1.sleep)(3000);
        console.log('I have seen one ' + blackboard["zombie"].getName());
        (0, Sleep_1.sleep)(1500);
        return SUCCESS;
    }
});
var movingTask = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function () {
        console.log('Starting to move towards the target');
        (0, Sleep_1.sleep)(1500);
    },
    // (optional) this function is called directly after the run method
    // is completed with either this.success() or this.fail(). It allows you to clean up
    // things, after you run the task.
    end: function () {
        console.log('The target is in the field of vision');
        (0, Sleep_1.sleep)(1500);
    },
    // This is the meat of your task. The run method does everything you want it to do.
    run: function () {
        console.log('Progressing carefully');
        (0, Sleep_1.sleep)(3000);
        return SUCCESS;
    }
});
var weaponCharged = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function () {
        console.log('I am checking my gun charger');
        (0, Sleep_1.sleep)(1500);
    },
    // This is the meat of your task. The run method does everything you want it to do.
    run: function (blackboard) {
        if (blackboard['warrior'].getWeapon().getCharge() > 0) {
            console.log("I still have my gun charged ");
            (0, Sleep_1.sleep)(1500);
            return SUCCESS;
        }
        else {
            console.log("I need to recharge ");
            (0, Sleep_1.sleep)(1500);
            return FAILURE;
        }
    }
});
var hasMunition = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function () {
        console.log('I am checking my munition ');
        (0, Sleep_1.sleep)(1500);
    },
    // This is the meat of your task. The run method does everything you want it to do.
    run: function (blackboard) {
        if (blackboard['warrior'].getMunition() > 0) {
            console.log("I still have munitions ");
            (0, Sleep_1.sleep)(1500);
            return SUCCESS;
        }
        else {
            console.log("I need to find munitions ");
            (0, Sleep_1.sleep)(1500);
            return FAILURE;
        }
    }
});
var chargeTask = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function () {
        console.log('I am charging my weapon ');
        (0, Sleep_1.sleep)(1000);
    },
    end: function () {
        console.log('Weapon charged successfully ');
    },
    // This is the meat of your task. The run method does everything you want it to do.
    run: function (blackboard) {
        (0, Sleep_1.sleep)(2000);
        console.log('Charging...');
        blackboard['warrior'].Charge();
        return SUCCESS;
    }
});
var attackTask = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function (blackboard) {
        (0, Sleep_1.sleep)(1500);
        console.log('Starting to attack this ' + blackboard["zombie"].getName());
    },
    // (optional) this function is called directly after the run method
    // is completed with either this.success() or this.fail(). It allows you to clean up
    // things, after you run the task.
    end: function (blackboard) {
        console.log('The target is dead');
        blackboard["zombie"].setBlood(100);
    },
    // This is the meat of your task. The run method does everything you want it to do.
    run: function (blackboard) {
        while (blackboard["zombie"].getBlood() > 0) {
            //for (var i = 0; i < 500000000; i++) {    }
            console.log('The ' + blackboard["zombie"].getName() +
                ' blood level is now : ' + blackboard["zombie"].getBlood());
            blackboard["warrior"].Attack(blackboard["zombie"]);
            (0, Sleep_1.sleep)(3000);
        }
        return SUCCESS;
    }
});
var mySelector = new Selector({
    nodes: [
        weaponCharged,
        hasMunition,
        chargeTask
    ]
});
var mySequence = new Sequence({
    nodes: [
        enemyExist,
        movingTask,
        mySelector,
        attackTask
    ]
});
var bTree = new BehaviorTree({
    tree: mySequence,
    blackboard: { "warrior": warrior, "zombie": zombie }
});
bTree.step();
setInterval(function () {
    bTree.step();
}, 25000);
