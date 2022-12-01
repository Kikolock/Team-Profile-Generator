// this file stores the questions for the program 


const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the team manager's name!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the team manager's ID?", 
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("Please enter the team manager's ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter the team manager's email!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNum',
        message: "What is the team manager's office number?",
        validate: officeInput => {
            if(officeInput) {
                return true;
            } else {
                console.log("Please enter the team manager's office number!");
                return false;
            }
        }
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the engineer's ID?",
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("Please enter the engineer's ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter the engineer's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's Github username?",
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log("Please enter the engineer's Github username!");
                return false;
            }
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the intern's ID?",
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("Please enter the intern's ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter the intern's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        validate: schoolInput => {
            if(schoolInput) {
                return true;
            } else {
                console.log("Please enter the intern's school!");
                return false;
            }
        }
    }
]


module.exports = {managerQuestions, engineerQuestions, internQuestions}; 