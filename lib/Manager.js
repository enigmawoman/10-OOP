const Employee = require('./Employee');

class Manager extends Employee {
    
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    managerON() {
        return this.officeNumber;
    }

    employeeRole() {
        return "Manager";
    }
}


module.exports = Manager;