const fs = require('fs')                                            // File System
const inquirer = require('inquirer')                                // Inquirer
const createManager = require('./lib/manager')                      // Manager
const createIntern = require('./lib/intern.js')                     // Intern
const createEngineer = require('./lib/engineer.js')                 // Engineer
const pageTemplate = require('./src/page-template.js')                 // Page Template

var team = [];                                                      // Team Array of employees


// Add more employees to team
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee?'
        }
    ]).then((answers) => {
        if (answers.addEmployee === true) {
            selectRole()
        } else {
            const html = pageTemplate(team)
            fs.writeFile('./dist/index.html', html, err => {
                if (err) throw err
                console.log('Success!')
            }
            )
        }
    }
    )
}
// Create Manager Data
const managerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the manager?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the manager?'
        }
    ]).then((answers) => {
        const manager = new createManager(
            answers.name, 
            answers.id, 
            answers.email, 
            answers.officeNumber
            )
        team.push(manager)

        addEmployee()
    }
    )
}

// Create team members and roles to finish building team
const selectRole = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github of the employee?',
            when: (answers) => answers.role === 'Engineer'

        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the employee?',
            when: (answers) => answers.role === 'Intern'
        }
    ]).then((answers) => {
        if (answers.role === 'Engineer') {
            const engineer = new createEngineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            )
            team.push(engineer)
            addEmployee()

        } else if (answers.role === 'Intern') {
            const intern = new createIntern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            )
            team.push(intern)
            addEmployee()
        }
    }
    )
}

// generate html page
function generateHTML() {
    fs.writeFile('./dist/index.html', pageTemplate(team), err => {
        if (err) throw err
        console.log('Success!')
    }
    )
}


// function to initialize program
function init(){    
    managerInfo()
}

// Initialize app
init();                                                                                 
