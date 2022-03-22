const Human = require('./Human');

class Wizard extends Human {
    constructor(name, age, powers = []) {
        super(name, age);
        this.powers = [...powers];
    }

    showRandowPower() {
        if (this.powers.length <= 0) {
            return "I haven't developed any power yet, but I'm learning at Hogwartz!";
        }
        const randomIndex = Math.floor(Math.random() * this.powers.length);
        return this.powers[randomIndex];
    }
}

module.exports = Wizard;
