export class Person {
    fullName: String;

    constructor(firstName: String, lastName: String) {
        this.fullName = firstName + " " + lastName;
    }
}