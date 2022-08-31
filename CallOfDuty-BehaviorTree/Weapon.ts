export class Weapon { 
    private name: string;
    private damage: number;
    private charge : number;
    private maxCharge: number;

    constructor(name: string, damage: number, charge: number,maxCharge: number) 
    {
        this.name = name;
        this.damage = damage;
        this.charge = charge;
        this.maxCharge = maxCharge;
    }

   public getName():string{ return this.name; }
   public getDamage():number{ return this.damage; }
   public getCharge():number{ return this.charge; }
   public getMaxCharge():number{ return this.maxCharge; }

   public setName(name:string) : void { this.name = name; }
   public setDamage(damage:number): void { this.damage = damage; }
   public setCharge(charge:number) : void { this.charge = charge; }
   public setMaxCharge(maxCharge:number) : void { this.maxCharge = maxCharge; }

}