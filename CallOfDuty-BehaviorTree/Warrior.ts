import {Person} from './Person';
import { Weapon } from './Weapon';

export class Warrior extends Person {
  private weapon : Weapon ;
  private munition : number ;

    constructor(name: string,blood : number, weapon : Weapon, munition : number) {
      super(name,blood);
      this.weapon = weapon;
      this.munition = munition;
    }

    public getWeapon() : Weapon { return this.weapon ; }
    public getMunition() : number { return this.munition ; } 

    public setWeapon(weapon : Weapon) : void {
      this.weapon = weapon;
    }

    public setMunition(munition : number) : void {
      this.munition = munition;
    }

    public Attack(target : Person) :  void {
      const newBlood = target.getBlood() - this.weapon.getDamage();
      this.weapon.setCharge(this.weapon.getCharge() - 1 );
      target.setBlood(newBlood);

    }
    public Charge() : void {
      const neededCharge = this.weapon.getMaxCharge() - this.weapon.getCharge();
      this.munition -= neededCharge ;
      this.weapon.setCharge(this.weapon.getMaxCharge());
    }
  }