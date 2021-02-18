const fs = require('fs');
const path = require("path");
const inquirer = require("inquirer");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const renderer = require("./renderHtml");
// console.log("hello");

class TeamGenerator {
    constructor() {

        this.employees = [];

        this.getEmployeeInfo = [
            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices: [ "Manager", "Engineer", "Intern", "Quit"]
            },
            //Name
            {
                type: "input",
                message: "Please enter your name:",
                name: "name",
                when: (data) => data.role === "Manager",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your name");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter your name:",
                name: "name",
                when: (data) => data.role === "Engineer",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your name");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter your name:",
                name: "name",
                when: (data) => data.role === "Intern",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your name");
                        return false;
                    }
                }
            },
            // ID Number
            {
                type: "input",
                message: "What is your ID Number?",
                name: "id",
                when: (data) => data.role === "Manager",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your ID Number");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is your ID Number?",
                name: "id",
                when: (data) => data.role === "Engineer",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your ID Number");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is your ID Number?",
                name: "id",
                when: (data) => data.role === "Intern",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your ID Number");
                        return false;
                    }
                }
            },
            // Email
            {
                type: "input",
                message: "Please enter your Email Address:",
                name: "email",
                when: (data) => data.role === "Manager",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your Email Address");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter your Email Address:",
                name: "email",
                when: (data) => data.role === "Engineer",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your Email Address");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter your Email Address:",
                name: "email",
                when: (data) => data.role === "Intern",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your Email Address");
                        return false;
                    }
                }
            },
            // Role Specific Information
            {
                type: "input",
                message: "Please enter your Office Number:",
                name: "officeNumber",
                when: (data) => data.role === "Manager",
                validate: (value) => {
                    return value.match(/^[0-9]+$/) ? true: "That is not a valid Office Number"
                }
            },
            {
                type: "input",
                message: "Please enter your github user name:",
                name: "github",
                when: (data) => data.role === "Engineer",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log("You must enter your github username");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the name of your school:",
                name: "school",
                when: (data) => data.role === "Intern", 
                validate: school => {
                    if (school) {
                        return true; 
                    } else {
                        console.log("You must enter the name of your school");
                        return false;
                    }
                }
            }

        ]; 
    }

    addEmployee() {
        inquirer.prompt(this.getEmployeeInfo).then(data => {

            switch (data.role) {

                case "Quit":
                    this.generatePage();
                    break;

                case "Manager":
                    this.employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                    this.addEmployee();
                    break;

                case "Engineer":
                    this.employees.push(new Engineer(data.name, data.id, data.email, data.github));
                    this.addEmployee();
                    break;

                case "Intern":
                    this.employees.push(new Intern(data.name, data.id, data.email, data.school));
                    this.addEmployee();
                    break;
            }
        });
    }

    generatePage() {
        const outputDir = path.resolve(__dirname, "../newHtml")
        const outputPath = path.join(outputDir, "team.html");

        // create the output folder if not exists
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        // write contents to the file
        fs.writeFileSync(outputPath, renderer(this.employees), "utf-8");
        console.log("New Team Profile Generated!");
    }
}

module.exports = TeamGenerator;