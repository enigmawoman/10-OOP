// we require the information in this file
const Intern = require('../lib/Intern');

describe("Intern", () => {
  describe("Start up", () => {
    it("check for correct answers from the construtor", () => {
        // giving example answers in order to test the code works as it should
        const name = 'Jacob';
        const id = 101;
        const email = 'jacob@employee.com';
        const school = 'Interns R US'
        const role = 'Intern';

        const result = new Intern(name, id, email, school);
      // these statements check to see if the information passed through const result match the output from this file
        expect(result.name).toEqual(name);
        expect(result.id).toEqual(id);
        expect(result.email).toEqual(email);
        expect(result.school).toEqual(school)
      // these statements check to see if the information passed through the constructor functions match the output from this file
        expect(result.getName()).toEqual(name);
        expect(result.getID()).toEqual(id);
        expect(result.getEmail()).toEqual(email);
        expect(result.getSchool()).toEqual(school);
        expect(result.getRole()).toEqual(role);
  
        });
    });
});