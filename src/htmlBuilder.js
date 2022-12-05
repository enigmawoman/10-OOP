// we require the node.js file system module
const fs = require('fs');
// we require the information in the following files in order to run the code on this page
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
// this function will run when the user runs the "build team page" request - it will bring over the information from the arrays generated in the runQuestions.js file and write the information into the template literals
const htmlGenerator = (Managers, Engineers, Interns) => {
// this reads and syncs the information in the starter.html with the information being added through the template literals below
    let pagePopulate = fs.readFileSync('./templates/starter.html', 'utf8');
    // a "for loop" to populate the information for each type of employee
    if (pagePopulate) {

        let managerInfo = '';
        Managers.forEach(manager => {
            managerInfo += 
            `<div class="box">
                <div class="box-header">
                    <h2>${manager.name}</h2>
                    <h3><span class="fa-solid fa-user-tie"></span> Manager</h3>
                </div>
                <div class="box-info">
                    <p><b><i>Employee ID:</i></b> ${manager.id} </p>
                    <p><b><i>Email:</i></b> <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p><b><i>Office Number:</i></b> ${manager.officeNumber}</p>
                </div>
             </div>`
        })

        let engineerInfo = '';
        Engineers.forEach(engineer => {
            engineerInfo += 
            `<div class="box">
                <div class="box-header">
                    <h2>${engineer.name}</h2>
                    <h3><span class="fa-solid fa-user-gear"></span> Engineer</h3>
                </div>
                <div class="box-info">
                    <p><b><i>Employee ID:</i></b> ${engineer.id} </p>
                    <p><b><i>Email:</i></b> <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p><b><i>GitHub:</i></b> <a href="https://github.com/${engineer.github}">@${engineer.github}</a></p>
                </div>
            </div>`
        })

        let internInfo = '';
        Interns.forEach(intern => {
            internInfo += 
            `<div class="box">
                <div class="box-header">
                    <h2>${intern.name}</h2>
                    <h3><span class="fa-solid fa-graduation-cap"></span> Intern</h3>
                </div>
                <div class="box-info">
                    <p><b><i>Employee ID:</i></b> ${intern.id} </p>
                    <p><b><i>Email:</i></b> <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p><b><i>School:</i></b> ${intern.school}</p>
                </div>
            </div>`
        })
        // swapping out the "hold text" and replacing with the template literals above
        pagePopulate = pagePopulate.replace('<!--managerInfo-->', managerInfo);
        pagePopulate = pagePopulate.replace('<!--engineerInfo-->', engineerInfo);
        pagePopulate = pagePopulate.replace('<!--internInfo-->', internInfo);
// using the node.js file system to write the info from the page populate function to a new file for the user to render in a browser
        fs.writeFileSync('./dist/teamPage.html', pagePopulate, 'utf8');
// confirming the page has been sucessfully created
        console.log('Team page created')

    }
} 

// exporting the function needed to link from the runQuestions.js file
module.exports = htmlGenerator


