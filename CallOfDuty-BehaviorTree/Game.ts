const { BehaviorTree, Sequence,  Selector,Task, SUCCESS, FAILURE } = require('behaviortree');
import {Warrior} from './Warrior';
import {Person} from './Person';
import { Weapon } from './Weapon';
import {sleep} from './Sleep';

let AKM = new Weapon("AKM", 25,4,75);
let warrior = new Warrior("Mohamed",100,AKM,40);
let zombie = new Person("zombie",100);



const enemyExist = new Task({

  // This is the meat of your task. The run method does everything you want it to do.
  run: function (blackboard : any) {
    console.log('I am '+ blackboard["warrior"].getName() + ' and I am scanning the battle field');
    sleep(3000);
    console.log('I have seen one ' + blackboard["zombie"].getName() );
    sleep(1500);
    return SUCCESS;
  }
})

const movingTask = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function () {
        console.log('Starting to move towards the target');
        sleep(1500);
    },
  
    // (optional) this function is called directly after the run method
    // is completed with either this.success() or this.fail(). It allows you to clean up
    // things, after you run the task.
    end: function () {
      console.log('The target is in the field of vision');
      sleep(1500);
    },
  
    // This is the meat of your task. The run method does everything you want it to do.
    run: function () {
      console.log('Progressing carefully');
      sleep(3000);
      return SUCCESS;
    }
  })

  const weaponCharged = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function () {
        console.log('I am checking my gun charger');
        sleep(1500);
    },
  
    // This is the meat of your task. The run method does everything you want it to do.
    run: function (blackboard : any) {
      if (blackboard['warrior'].getWeapon().getCharge() > 0) {
        console.log("I still have my gun charged ");
        sleep(1500);
        return SUCCESS;
      }
      else {
        console.log("I need to recharge ");
        sleep(1500);
        return FAILURE;
    }
  }})

  const hasMunition = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function () {
        console.log('I am checking my munition ');
        sleep(1500);
    },
  
    // This is the meat of your task. The run method does everything you want it to do.
    run: function (blackboard : any) {
      if (blackboard['warrior'].getMunition() > 0) {
        console.log("I still have munitions ");
        sleep(1500);
        return SUCCESS;
      }
      else {
        console.log("I need to find munitions ");
        sleep(1500);
        return FAILURE;
    }
  }})

  const chargeTask = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function () {
        console.log('I am charging my weapon ');
        sleep(1000);
    },

    end: function () {
      console.log('Weapon charged successfully ');
    },
  
    // This is the meat of your task. The run method does everything you want it to do.
    run: function (blackboard : any) {
      sleep(2000);
      console.log('Charging...'); 
      blackboard['warrior'].Charge();
      return SUCCESS;
      
  }})

  const attackTask = new Task({
    // (optional) this function is called directly before the run method
    // is called. It allows you to setup things before starting to run
    start: function (blackboard : any) {
        sleep(1500);
        console.log('Starting to attack this ' + blackboard["zombie"].getName());
    },
  
    // (optional) this function is called directly after the run method
    // is completed with either this.success() or this.fail(). It allows you to clean up
    // things, after you run the task.
    end: function (blackboard : any) {
      console.log('The target is dead');
      blackboard["zombie"].setBlood(100);
    },
  
    // This is the meat of your task. The run method does everything you want it to do.
    run: function (blackboard :any ) {
        while (blackboard["zombie"].getBlood()> 0 ) {
          //for (var i = 0; i < 500000000; i++) {    }
          console.log('The '+ blackboard["zombie"].getName() + 
                      ' blood level is now : ' + blackboard["zombie"].getBlood());
          blackboard["warrior"].Attack(blackboard["zombie"]);
          sleep(3000);
        }
        
      return SUCCESS;
    }
  })

const mySelector = new Selector({
    nodes: [
      weaponCharged,
      hasMunition,
      chargeTask
    ]
  })

const mySequence = new Sequence({
    nodes: [
        enemyExist,
        movingTask,
        mySelector,
        attackTask
    ]
  })

var bTree = new BehaviorTree({
    tree: mySequence,
    blackboard: {"warrior" : warrior ,"zombie" : zombie}
  })

  
bTree.step() ;
setInterval(function () {
    bTree.step() ;
  }, 25000)