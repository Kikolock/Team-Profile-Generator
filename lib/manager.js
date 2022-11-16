//The Manager class, extends Employee and also adds the officeNumber property and overloads getRole to return "Manager".
//I also created a getOfficeNumber method even though it wasn't outlined in the challenge instructions since it was the only object property that
//did not have a method to return its value.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {return 'Manager';}

    getOfficeNumber() {return this.officeNumber;}

}

module.exports = Manager;