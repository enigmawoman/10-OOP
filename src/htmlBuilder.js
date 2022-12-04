const fs = require('fs');

const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

const htmlGenerator = (Managers, Engineers, Interns) => {

    let pagePopulate = fs.readFileSync('./templates/starter.html', 'utf8');
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

        pagePopulate = pagePopulate.replace('<!--managerInfo-->', managerInfo);
        pagePopulate = pagePopulate.replace('<!--engineerInfo-->', engineerInfo);
        pagePopulate = pagePopulate.replace('<!--internInfo-->', internInfo);

        fs.writeFileSync('./dist/teamPage.html', pagePopulate, 'utf8');

        console.log('Team page created')

    }
} 


module.exports = htmlGenerator


