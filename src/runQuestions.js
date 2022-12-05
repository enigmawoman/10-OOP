// requiring the inquirer module in order to run the questions in the terminal
const inquirer = require('inquirer');
// requiring the htlGenerator file in order to link to it to run the function that will generate the populate team page
const htmlGenerator = require('./htmlBuilder')
//require the info in these files in order to run the code below
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
// arrays where the data collected from the questions will populate to - these arrays then export across into the htmlgenerator.js file
const Managers = [];
const Interns = [];
const Engineers = [];
// reuiure the questions.js file
const Questions = require('./questions');
// this function is called from the index.js file and runs questions required to populate the html team page
const runStartQuestions = () => {
    // inquirer prompt
    inquirer
    // asking the initial questions to determine which type of emplpyee you would like to add
    .prompt(Questions.StartQuestion)
    .then((answer) => {
        // using a switch statement to determine which function needs to run based on the user input
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
// goes off to run the htmlGenerator function
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
// the follwoing functions propmt the questions relevent to each employee and then takes the responses and adds them to the relevant array for export

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
// exports the function to be able to call it from the index.js file
module.exports = runStartQuestions;