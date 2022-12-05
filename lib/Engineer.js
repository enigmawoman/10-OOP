// we require the base constructor "Employee" class
const Employee = require('./Employee');
// extending the class Employee and asking a further question for the engineer
class Engineer extends Employee {
    
    constructor(name, id, email, github) {
        //super pulls through the answers gained from the employee class
        super(name, id, email);
        this.github = github;
    }
    // functions to return each answer given by the user
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

//exporting the info that is gained from this class
module.exports = Engineer;