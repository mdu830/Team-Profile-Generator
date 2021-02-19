const { TestScheduler } = require("jest");
const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

// check office number input
test("Checking office number input/output", () => {
    const input = 23;
    const user = new Manager("John", 12345, "longjohnson@domain.com", input);
    expect(user.officeNum).toBe(input);
});
// check if getRole() returns "Manager"
test("Checking if getRole() returns the users role choice from list", () => {
    const choice = "Manager";
    const user = new Manager("jimmy", 12345, "jimmy@domain.com");
    expect(user.getRole()).toBe(choice);
});
// check if getOfficeNum() returns user input
test("Checking if getOfficeNum() returns the users input", () => {
    const input = 23;
    const user = new Manager("jimmy", 12345, "jimmy@domain.com", input);
    expect(user.getOfficeNum()).toBe(input);
});
