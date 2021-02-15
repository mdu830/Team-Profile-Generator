const Employee = require("./employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        
        super(name, id, email);
        this.github = github;
        super.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;