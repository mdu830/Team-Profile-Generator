const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

// check github input
test("Checking github input/output", () => {
    const input = "mdu830";
    const user = new Engineer("John", 12345, "longjohnson@domain.com", input);
    expect(user.github).toBe(input);
});
// check if getRole() returns "Engineer"
test("Checking if getRole() returns the users role choice from list", () => {
    const choice = "Engineer";
    const user = new Engineer("jimmy", 12345, "jimmy@domain.com");
    expect(user.getRole()).toBe(choice);
});
// check if getGithub() returns user input
test("Checking if getGithub() returns the users input", () => {
    const input = 23;
    const user = new Engineer("jimmy", 12345, "jimmy@domain.com", input);
    expect(user.getGithub()).toBe(input);
});