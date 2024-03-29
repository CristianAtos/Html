function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor =>{
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name =>{
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}


class CanSayHi {
    name;

    sayHi(){
        return `Hello, ${this.name}`;
    }
}

class HasSuperPower{
    heroName;

    superpower(){
        return `${this.heroName}😁😁`
    }
}

class SuperHero implements CanSayHi, HasSuperPower{
    heroName: any;

    constructor(public name){
        this.heroName = `SUPER ${name}`;
    }
    sayHi: () => string;
    superpower: () => string;
}

applyMixins(SuperHero, [CanSayHi, HasSuperPower])

const ts = new SuperHero('TypeScript')
console.log(ts.superpower())