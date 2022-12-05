// we require the base constructor "Employee" class
const Employee = require('./Employee');
// extending the class Employee and asking a further question for the intern

class Intern extends Employee {
    
    constructor(name, id, email, school) {
        //super pulls through the answers gained from the employee class

        super(name, id, email);
        this.school = school;
    }
    // functions to return each answer given by the user
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

}

//exporting the info that is gained from this class

module.exports = Intern;