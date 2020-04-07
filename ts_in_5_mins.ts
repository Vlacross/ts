
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}


interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "P", "Dooser");

document.body.textContent = greeter(user);


/* coding along with quick guide from: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html */