const Employee = require("../lib/employee");

// TESTING INQUIRER PROMPTS

// check the employee role choices menu
test("Start role of employee choices", () => {
    const user = new Employee();
    expect(typeof(user)).toBe("object");
});
// check name input
test("checking name input/output", () => {
    const name = "John";
    const user = new Employee(name);
    expect(user.name).toBe(name);

});
// check ID # input
test("Checking ID Number input/output", () => {
    const id = 12345
    const user = new Employee("Jimmy", id);
    expect(user.id).toBe(id);

});
// check email input
test("checking email input/output", () => {
    const email = "slimjim@domain.com";
    const user = new Employee("jimmy", 12345, email);
    expect(user.email).toBe(email);
});

// TESTING get*data*() functions

// checking getName()
test("checking if getname() returns the users name input", () => {
    const name = "John";
    const user = new Employee(name);
    expect(user.getName()).toBe(name);

});
// checking getId()
test("Checking if getId() returns the users id input", () => {
    const id = 12345
    const user = new Employee("Jimmy", id);
    expect(user.getId()).toBe(id);

});
// checking getEmail()
test("Checking if getEmail() returns the users email input", () => {
    const email = "slimjim@domain.com";
    const user = new Employee("jimmy", 12345, email);
    expect(user.getEmail()).toBe(email);
});
// checking getRole()
test("Checking if getRole() returns the users role choice from list", () => {
    const choice = "Employee";
    const user = new Employee("jimmy", 12345, "jimmy@domain.com");
    expect(user.getRole()).toBe("Employee");
})


