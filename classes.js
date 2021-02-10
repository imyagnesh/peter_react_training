// Object Oriented Programing Concepts

// Abstraction  -> Just revile Related information to end user
// Encapsulation -> put related information together
// Inhteritance -> code reusability
// Polimorphysome  -> expose related thing

// function Animal(type) {

// }

// Animal()

// const abc =  'abc';

class Animal {
  constructor(type) {
    console.log(type);
    this.type = type;
    // call only once when will create instance
  }

  set type(value) {
    this._type = value.toUpperCase();
  }

  get type() {
    return this._type;
  }

  makeSound() {
    console.log(this.type);
    if (this.type === 'DOG') {
      console.log('bow wow');
    } else {
      console.log('Meow...');
    }
  }

  static a = 1;

  static sayHello() {
    console.log('hello');
  }
}

class Dog extends Animal {
  constructor() {
    super('Dog');
  }

  makeSound() {
    super.makeSound();
  }
}

const d = new Dog();

d.makeSound();

// // instance of the object
// const a = new Animal('dog')
// console.log(Animal.a);
// a.makeSound()

// // instance of the object
// const b = new Animal('cat')
// b.makeSound()
