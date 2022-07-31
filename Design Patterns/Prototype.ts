/* 
The prototype pattern is a useful way to share properties among many objects of the same type.
The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain.
*/

class Dog {
  name: string;
  play: () => void;
  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return "Woof!";
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Spot");

console.log(Dog.prototype);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

// console.log(dog1.__proto__);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

Dog.prototype.play = () => console.log("Playing now!");

dog1.play();

/*
The prototype pattern allows us to easily let objects access and inherit properties from other objects.
Since the prototype chain allows us to access properties that aren't directly defined on the object itself, we can avoid duplication of methods and properties, thus reducing the amount of memory used.
*/
