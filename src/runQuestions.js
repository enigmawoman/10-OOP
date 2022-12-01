const inquirer = require('inquirer');

const htmlGenerator = require('./htmlBuilder')

const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

const Managers = [];
const Interns = [];
const Engineers = [];

const Questions = require('./questions');

const runStartQuestions = () => {
    inquirer
    .prompt(Questions.StartQuestion)
    .then((answer) => {
        switch(answer.selection) {
            case 'Add a Manager':

            runManagerQuestions()
            break;

            case 'Add an Engineer':

            runEngineerQuestions()
            break;

            case 'Add an Intern':

            runInternQuestions()
            break;

            case 'Build Team Page':

            console.log('Building Team Page')
            htmlGenerator(Managers, Engineers, Interns);
            break;
            default:
                console.log('defualt')
                break;
        }
    })
};

const runManagerQuestions = () => {
    inquirer
    .prompt(Questions.ManagerQues)
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        Managers.push(manager);
        console.log(Managers);
        runStartQuestions();
    })
};

const runEngineerQuestions = () => {
    inquirer
    .prompt(Questions.EngineerQues)
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        Engineers.push(engineer);
        console.log(Engineers);
        runStartQuestions();
    })
};

const runInternQuestions = () => {
    inquirer
    .prompt(Questions.InternQues)
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        Interns.push(intern);
        console.log(Interns);
        runStartQuestions();
    })
}

module.exports = runStartQuestions;