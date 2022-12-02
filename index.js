//All of the require statements for the various pieces teh application uses.
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const { writeToFile, copyStyle } = require('./utils/createPage');
//another file was created to store questions for employees
const { managerQuestions, engineerQuestions , internQuestions } = require('./questions');

//employees is a global array that is used to store the employee objects as they are created.
let employees = [];

//this function adds the team manger object. it prompts the user for input and returns the provided answers.
const addManager = () => {
    return inquirer.prompt(managerQuestions);
}

//this switch function makes the code cleaner, user is prompted with appropriate questions for Engineer and Intern.
function addEmployee(employeeTypeChoice) { 
    switch (employeeTypeChoice) {
        case 'engineer':
            return inquirer.prompt(engineerQuestions)
        case 'intern':
             return inquirer.prompt(internQuestions);
        default:
            break;
    }
 }

//this function is called to display the main menu where the user selects to add an engineer, add an intern, or finish. when a choice is made, the appropriate
//function is called, the answers that are returned are then pushed to the employees array and then the displayMenu function is recursively called. if the finished
//option is selected the app calls the function to generate the HTML and write the file.
const displayMenu = () => {
    let done = false;
        inquirer.prompt(
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: ['Add an Engineer', 'Add an Intern', 'Finish Building My Team']
            }
        ).then(menuChoice => {
        
            if(menuChoice.choice === 'Add an Engineer'){
                //this function is calling the switch statement
                addEmployee('engineer')
                .then(engInfo => {
                    const engineer = new Engineer(engInfo.name, engInfo.id, engInfo.email, engInfo.github);
                    employees.push(engineer);
                    displayMenu();
            
                })
            } else if (menuChoice.choice === 'Add an Intern') {
                //this function is calling the switch statement
                addEmployee('intern')
                .then(intInfo => {
                    const intern = new Intern(intInfo.name, intInfo.id, intInfo.email, intInfo.school);
                    employees.push(intern);
                    displayMenu();
            
                })
            } else {
                console.log('Finished building team');
                //call generateHTML and pass the employees array so the index.html page can be created.
                const pageHTML = generateHTML(employees);
                //write the index.html file using the HTML generated previously.
                writeToFile('./dist/index.html', pageHTML).then(writeResponse => {
                    console.log(writeResponse.message);
                    //copy the style.css sheet to the ./dist directory
                    return copyStyle();
                })
                .catch(err => {
                    console.log(err);
                });
            }
            
        });
}

//start the application
addManager().then(function(mgrInfo){
    const manager = new Manager(mgrInfo.name, mgrInfo.id, mgrInfo.email, mgrInfo.officeNum);
    employees.push(manager);
    displayMenu();
}).catch(err => {
    console.log(err);
});