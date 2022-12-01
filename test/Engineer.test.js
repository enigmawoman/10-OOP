const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  describe("Start up", () => {
    it("check for correct answers from the construtor", () => {
        
        const name = 'Jacob';
        const id = 101;
        const email = 'jacob@employee.com';
        const github = '@JacobCodes404'
        const role = 'Engineer';

      const result = new Engineer(name, id, email, github);

      expect(result.name).toEqual(name);
      expect(result.id).toEqual(id);
      expect(result.email).toEqual(email);
      expect(result.github).toEqual(github)

      expect(result.employeeName()).toEqual(name);
      expect(result.employeeID()).toEqual(id);
      expect(result.employeeEmail()).toEqual(email);
      expect(result.engineerGithub()).toEqual(github);
      expect(result.employeeRole()).toEqual(role);

    });
  });
});