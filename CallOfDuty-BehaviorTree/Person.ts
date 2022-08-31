export class Person {
    protected name: string ;
    protected blood : number ;

      constructor(name : string, blood : number) {
        this.name = name ;
        this.blood = blood;
      }
  
      public getName() : string { return this.name ; }
      public getBlood() : number { return this.blood  }

      public setName(name : string) : void { this.name = name }
      public setBlood(blood : number) : void { this.blood = blood }

    }