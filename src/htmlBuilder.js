const fs = require('fs');

const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

const htmlGenerator = (Managers, Engineers, Interns) => {

    let pagePopulate = fs.readFileSync('./templates/starter.html', 'utf8');
    if (pagePopulate) {

        let managerInfo = '';
        Managers.forEach(manager => {
            managerInfo += `<div class="box">
            <div class="box-header">
                <h2><span class="fa-solid fa-user-tie"></span>Engineer</h2>
            </div>
            <div class="box-info">
                <h3>${manager.name}</h3>
                <p>Employee ID: ${manager.id} </p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>`
        })

        let engineerInfo = '';
        Engineers.forEach(engineer => {
            engineerInfo += `<div class="box">
            <div class="box-header">
                <h2><span class="fa-solid fa-user-gear"></span> Manager</h2>
            </div>
            <div class="box-info">
                <h3>${engineer.name}</h3>
                <p>Employee ID: ${engineer.id} </p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}">@${engineer.github}</a></p>
            </div>
        </div>`
        })

        let internInfo = '';
        Interns.forEach(intern => {
            internInfo += `<div class="box">
            <div class="box-header">
                <h2><span class="fa-solid fa-graduation-cap"></span> Intern</h2>
            </div>
            <div class="box-info">
                <h3>${intern.name}</h3>
                <p>Employee ID: ${intern.id} </p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>`
        })

        pagePopulate = pagePopulate.replace('<!--managerInfo-->', managerInfo);
        pagePopulate = pagePopulate.replace('<!--engineerInfo-->', engineerInfo);
        pagePopulate = pagePopulate.replace('<!--internInfo-->', internInfo);

        fs.writeFileSync('./dist/teamPage.html', pagePopulate, 'utf8');

        console.log('Team page created')

    }
} 


module.exports = htmlGenerator


