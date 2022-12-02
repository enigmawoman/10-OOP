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

      expect(result.getName()).toEqual(name);
      expect(result.getID()).toEqual(id);
      expect(result.getEmail()).toEqual(email);
      expect(result.getGithub()).toEqual(github);
      expect(result.getRole()).toEqual(role);

    });
  });
});