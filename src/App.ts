import {Person} from "./model/Person";

class Startup {
    public static main(): number {
        console.log('Hello World!');
        var person = new Person("Bobo", "Ogibon");
        console.log(person.fullName);
        return 0;
    }
}

Startup.main();