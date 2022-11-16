//The Intern class, extends Employee and also adds the school property and the getSchool method. Overloads getRole to return "Intern"
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {return this.school};

    getRole() {return 'Intern';}

}

module.exports = Intern;