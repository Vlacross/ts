var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "P", "Dooser");
document.body.textContent = greeter(user);
/* coding along with quick guide from: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html */ 
