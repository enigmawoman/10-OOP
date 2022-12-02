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
  
        expect(result.employeeName()).toEqual(name);
        expect(result.employeeID()).toEqual(id);
        expect(result.employeeEmail()).toEqual(email);
        expect(result.internSchool()).toEqual(school);
        expect(result.employeeRole()).toEqual(role);
  
        });
    });
});