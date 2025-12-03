class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() { // method to make sound
        console.log(`${this.name} says: ${this.sound}`);
    }
}

const dog = new Animal("Buddy", "Dog", "Woof");
const cat = new Animal("Whiskers", "Cat", "Meow");
console.log("Dog: ", dog, "Cat: ", cat);

dog.makeSound(); // call the method
cat.makeSound(); // call the method


// class Car {

//     constructor( public name: string, public model: string, public year: number) {
//     }

//     manufactureInfo() {
//         console.log(`${this.name} is made in Year: ${this.year}`);
//     }

// }
// const car1 = new Car("Toyota", "Camry", 2020);
// const car2 = new Car("Honda", "Civic", 2019);
// console.log("Car 1: ", car1, "Car 2: ", car2);

// car1.manufactureInfo()


// parameter property declaration
