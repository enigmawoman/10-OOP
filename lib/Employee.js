class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    employeeName() {
        return this.name;
    }

    employeeID() {
        return this.id;
    }

    employeeEmail() {
        return this.email;
    }

    employeeRole() {
        return "Employee";
    }

}
module.exports = Employee;