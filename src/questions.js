const StartQuestion =[
    {   type: 'list',
        message: 'What would you like to do?',
        name: 'selection',
        choices: ['Add a Manager', 'Add an Engineer', 'Add an Intern', 'Build Team Page'],
      },
];

const ManagerQues =[
    {
        type: "input",
        name: "name",
        message: "What is the Employee's Name?",
    },
    {
        type: "input",
        name: "id",
        message: "Please provide the Employee's ID number",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide the Employee's email address",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please provide the Managers office telephone number",
    },
];

const EngineerQues =[
    {
        type: "input",
        name: "name",
        message: "What is the Employee's Name?",
    },
    {
        type: "input",
        name: "id",
        message: "Please provide the Employee's ID number",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide the Employee's email address",
    },
    {
        type: "input",
        name: "github",
        message: "Please provide the Eningeer's GitHub username",
    },
];

const InternQues =[
    {
        type: "input",
        name: "name",
        message: "What is the Employee's Name?",
    },
    {
        type: "input",
        name: "id",
        message: "Please provide the Employee's ID number",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide the Employee's email address",
    },
    {
        type: "input",
        name: "school",
        message: "Please provide the Intern's School name",
    },
];

module.exports = (StartQuestion, InternQues, EngineerQues, ManagerQues);