const Employee = require('../lib/Employee');

describe("Employee", () => {
  describe("Start up", () => {
    it("check for correct answers from the construtor", () => {
        
        const name = 'Jacob';
        const id = 101;
        const email = 'jacob@employee.com';
        const role = 'Employee';

      const result = new Employee(name, id, email);

      expect(result.name).toEqual(name);
      expect(result.id).toEqual(id);
      expect(result.email).toEqual(email);

      expect(result.employeeName()).toEqual(name);
      expect(result.employeeID()).toEqual(id);
      expect(result.employeeEmail()).toEqual(email);
      expect(result.employeeRole()).toEqual(role);

    });
  });
});