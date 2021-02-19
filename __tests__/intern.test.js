const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

// check office number input
test("Checking school input/output", () => {
    const input = "UNC Chapel Hill";
    const user = new Intern("John", 12345, "longjohnson@domain.com", input);
    expect(user.school).toBe(input);
});
// check if getRole() returns "Intern"
test("Checking if getRole() returns the users input", () => {
    const choice = "Intern";
    const user = new Intern("jimmy", 12345, "jimmy@domain.com");
    expect(user.getRole()).toBe(choice);
});
// check if getSchool() returns user input
test("Checking if getSchool() returns the users input", () => {
    const input = "UNC Chapel Hill";
    const user = new Intern("jimmy", 12345, "jimmy@domain.com", input);
    expect(user.getSchool()).toBe(input);
});