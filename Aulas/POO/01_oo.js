const faker = require('faker');

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return Math.random() > 0.5 ? 'Hi' : 'Hello';
    }
}

const randomHuman = new Human(faker.name.firstName(), faker.datatype.number(99));

console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}`);
