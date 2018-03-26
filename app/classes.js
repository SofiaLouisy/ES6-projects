class Animal {
    constructor(name,height) {
        this.name = name;
        this.height = height;
    }
    hello() {
        console.log(`Hi, I'm ${this.name}`)
    }

    static continent() {
        return "Africa";
    }
}

let king = new Animal('Mufasa',4.5);
console.log(king);
king.hello();
console.log(Animal.continent);

class Lion extends Animal {
    constructor(name, height, color) {
        super(name,height);
        this.color = color;
    }
    hello() {
        console.log(`Hi!, I'm ${this.name} and I'm a lion`)
    }
}

let son = new Lion("Simba",2,"golden");
console.log(son);

export default Animal;