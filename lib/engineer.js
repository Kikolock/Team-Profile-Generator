//The Engineer class, extends Employee and also adds the github property and the getGithub method. Overloads getRole to return "Engineer"
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {return this.github};

    getRole() {return 'Engineer';}
}

module.exports = Engineer;