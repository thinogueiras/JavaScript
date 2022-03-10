class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return Math.random() > 0.5 ? 'Hi' : 'Hello';
    }
}

module.exports = Human;
