const Manager = require('../lib/Manager');

describe("Manager", () => {
  describe("Start up", () => {
    it("check for correct answers from the construtor", () => {
        
        const name = 'Jacob';
        const id = 101;
        const email = 'jacob@employee.com';
        const officeNumber = '02045876342';
        const role = 'Manager';

        const result = new Manager(name, id, email, officeNumber);

        expect(result.name).toEqual(name);
        expect(result.id).toEqual(id);
        expect(result.email).toEqual(email);
        expect(result.officeNumber).toEqual(officeNumber)
  
        expect(result.getName()).toEqual(name);
        expect(result.getID()).toEqual(id);
        expect(result.getEmail()).toEqual(email);
        expect(result.getofficeNumber()).toEqual(officeNumber);
        expect(result.getRole()).toEqual(role);
  
        });
    });
});