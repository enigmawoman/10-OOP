class Employee {
    //this is the base constructor function to create objects containing the properties we want to get from the answers we ask the user
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    // functions to return each answer given by the user
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}
//exporting the info that is gained from this class
module.exports = Employee;