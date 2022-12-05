// we require the base constructor "Employee" class
const Employee = require('./Employee');
// extending the class Employee and asking a further question for the manager
class Manager extends Employee {
    
    constructor(name, id, email, officeNumber) {
    //super pulls through the answers gained from the employee class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
// functions to return each answer given by the user
    getofficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

//exporting the info that is gained from this class
module.exports = Manager;