const Intern = require('../lib/Intern');

describe("Intern", () => {
  describe("Start up", () => {
    it("check for correct answers from the construtor", () => {
        
        const name = 'Jacob';
        const id = 101;
        const email = 'jacob@employee.com';
        const school = 'Interns R US'
        const role = 'Intern';

        const result = new Intern(name, id, email, school);

        expect(result.name).toEqual(name);
        expect(result.id).toEqual(id);
        expect(result.email).toEqual(email);
        expect(result.school).toEqual(school)
  
        expect(result.getName()).toEqual(name);
        expect(result.getID()).toEqual(id);
        expect(result.getEmail()).toEqual(email);
        expect(result.getSchool()).toEqual(school);
        expect(result.getRole()).toEqual(role);
  
        });
    });
});