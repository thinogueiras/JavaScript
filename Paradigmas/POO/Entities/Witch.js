const Human = require('./Human');

class Witch extends Human {
    greet() {
        return 'Abracadabra';
    }
}

module.exports = Witch;
