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

      expect(result.getName()).toEqual(name);
      expect(result.getID()).toEqual(id);
      expect(result.getEmail()).toEqual(email);
      expect(result.getRole()).toEqual(role);

    });
  });
});