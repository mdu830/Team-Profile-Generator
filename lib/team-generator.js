const fs = require('fs');
const inquirer = require("inquirer");

const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// console.log("hello");

class TeamGenerator {
    constructor() {

        this.employees = [],

        this.getEmployeeInfo = [
            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices: [ "Manager", "Engineer", "Intern", "Quit"]
            },
            {
                type: "input",
                message: "Please enter your name:",
                name: "name",
                when: this.role != "Quit",
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
                message: "Please enter your Employee ID Number:",
                name: "id",
                when: this.role != "Quit",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("You must enter your employee ID Number");
                        return false;
                    }

                }
            },
            {
                type: "input",
                message: "Please enter your Email Address:",
                name: "id",
                when: this.role != "Quit",
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


    generateTeam() {
        this.addEmployee();

    }

    addEmployee() {
        inquirer.prompt(this.getEmployeeInfo).then(data => {

            switch (data.role) {

                case "Quit":
                    this.generatePage();
                    console.log("Exited early");
                    break;

                case "Manager":
                    this.employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                    this.addEmployee();
                    break;

                case "Engineer":
                    this.employees.push(new Engineer(data.name,data.id, data.email, data.github));
                    this.addEmployee();
                    break;

                case "Intern":
                    this.employees.push(new Intern(data.name, data.id, data.email, data.school));
                    break;

            }
        });
    }
    
    generatePage() {

        fs.readFile(__dirname + "base.html", "utf8", (html) => {
            html.split("<script></script>").join(this.appendEmployee());

            fs.writeFile('(new)index.html', htmlString, console.log("New Team Profile Generated!"))
        })
      
    }

    appendEmployee() {
        var script = '';

        this.employees.forEach(i => {
            var specificInfo = "";

            switch(i, getRole()) {
                case "Quit":
                    this.generatePage();
                    console.log("leaving...");
                case "Manager":
                    specificInfo = `Office Number: ${i.getOfficeNum()}`;
                    break;
                case "Engineer":
                    specificInfo = `Github: ${i.getGithub()}`;
                    break;
                case "Intern":
                    specificInfo = `School: ${i.getSchool()}`;
                    break;
            }

            var card = 
            `<script>
            col = $("<div>");
            col.attr("class", "col");
            $("#appendCards").append(col);

            card = $("<div>");
            card.attr("class", "card");
            col.append(card);

            cardHeader = $("<div>");
            cardHeader.attr("class", "card-header");
            cardHeader.text(${i.getName()});
            card.append(cardHeader);

            cardHeader2 = $("<div>");
            cardHeader2.attr("class", "card-header");
            cardHeader2.text(${i.getRole()});
            card.append(cardHeader2);

            cardBody = $("<div>");
            cardBody.attr("class", "card-body");
            card.append(cardBody);

            row1 = $("<div>");
            row1.attr("class", "row");
            row1.text("ID: ${i.getId()}");
            cardBody.append(row1);

            row2 = $("<div>");
            row2.attr("class", "row");
            row2.text("Email: ${i.getEmail()}");
            cardBody.append(row2);

            row3 = $("<div>");
            row3.attr("class", "row");
            row3.text("${specificInfo}");
            cardBody.append(row3);

            </script>`;

            script = script + card;
        });
        return script;
    }
}

module.exports = TeamGenerator;

