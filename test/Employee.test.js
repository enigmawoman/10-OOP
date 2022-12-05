// we require the information in this file
const Employee = require('../lib/Employee');
// test function
describe("Employee", () => {
  describe("Start up", () => {
    it("check for correct answers from the construtor", () => {
        // giving example answers in order to test the code works as it should
        const name = 'Jacob';
        const id = 101;
        const email = 'jacob@employee.com';
        const role = 'Employee';
// pulling in the class constructor from the Employee.js file 
      const result = new Employee(name, id, email);
      // these statements check to see if the information passed through const result match the output from this file

      expect(result.name).toEqual(name);
      expect(result.id).toEqual(id);
      expect(result.email).toEqual(email);

      // these statements check to see if the information passed through the constructor functions match the output from this file

      expect(result.getName()).toEqual(name);
      expect(result.getID()).toEqual(id);
      expect(result.getEmail()).toEqual(email);
      expect(result.getRole()).toEqual(role);

    });
  });
});