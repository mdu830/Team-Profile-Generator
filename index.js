const TeamGenerator = require("./lib/team-generator");
const inquirer = require("inquirer");

const team = new TeamGenerator();

team.addEmployee();