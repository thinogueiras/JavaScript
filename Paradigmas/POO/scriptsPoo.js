const faker = require('faker');
const Human = require('./Entities/Human');
const Wizard = require('./Entities/Wizard');
const Witch = require('./Entities/Witch');

const randomHuman = new Human(faker.name.firstName(), faker.datatype.number(99));

console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}`);

const randomWizard = new Wizard(
    faker.name.firstName(),
    faker.datatype.number(150),
    ['Lumos Maxima', 'Expecto Patronum', 'Wingardium Leviosa'],
);

console.log(`${randomWizard.greet()}, I'm ${randomWizard.name}. I'm a wizard`);

console.log(`Here's one of my powers: ${randomWizard.showRandowPower()}`);

const anotherRandomWizard = new Wizard(
    faker.name.firstName(),
    faker.datatype.number(150),
);

console.log(`${anotherRandomWizard.greet()}, I'm ${anotherRandomWizard.name}. I'm a wizard too`);
console.log(anotherRandomWizard.showRandowPower());

const randowWitch = new Witch(faker.name.firstName(), faker.datatype.number(1000));

console.log(`${randowWitch.greet()}, I'm the Sorcerer: ${randowWitch.name}.`);
